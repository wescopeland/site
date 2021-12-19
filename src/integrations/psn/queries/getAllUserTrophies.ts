import type { AuthTokensResponse, Trophy } from "psn-api";
import {
  getTitleTrophies,
  getUserTitles,
  getUserTrophiesEarnedForTitle,
  TrophyRarity,
  TrophyTitle
} from "psn-api";

import type {
  NormalizedAchievement,
  NormalizedGame
} from "@/integrations/models";
import { getGameLastEarnedOn } from "@/integrations/utils/getGameLastEarnedOn";

export const getAllUserTrophies = async (
  authorization: AuthTokensResponse,
  targetAccountId: string
): Promise<NormalizedGame[]> => {
  const { trophyTitles } = await getUserTitles(authorization, targetAccountId);

  const titleTrophiesPromises = [];
  const earnedTrophiesPromises = [];

  // If a profile has marked a game as hidden, ignore it.
  const onlyVisibleTitles = trophyTitles.filter(
    (title) => title.hiddenFlag !== true
  );

  for (const title of onlyVisibleTitles) {
    titleTrophiesPromises.push(
      getTitleTrophies(authorization, title.npCommunicationId, "all", {
        npServiceName:
          title.trophyTitlePlatform !== "PS5" ? "trophy" : undefined
      })
    );

    earnedTrophiesPromises.push(
      getUserTrophiesEarnedForTitle(
        authorization,
        targetAccountId,
        title.npCommunicationId,
        "all",
        {
          npServiceName:
            title.trophyTitlePlatform !== "PS5" ? "trophy" : undefined
        }
      )
    );
  }

  const titleTrophiesResponses = await Promise.all(titleTrophiesPromises);
  const earnedTrophiesResponses = await Promise.all(earnedTrophiesPromises);

  const games: NormalizedGame[] = [];

  for (const [
    currentIndex,
    titleTrophiesResponse
  ] of titleTrophiesResponses.entries()) {
    const currentTitle = onlyVisibleTitles[currentIndex];

    // Merge the two trophy lists.
    const mergedTrophies = mergeTrophyLists(
      titleTrophiesResponse.trophies,
      earnedTrophiesResponses[currentIndex].trophies,
      currentTitle
    );

    games.push({
      name: sanitizeGameName(currentTitle.trophyTitleName),
      platform: currentTitle.trophyTitlePlatform,
      achievements: mergedTrophies,
      trophyTypeCounts: currentTitle.definedTrophies,
      earnedCounts: currentTitle.earnedTrophies,
      lastEarnedOn: getGameLastEarnedOn(mergedTrophies) ?? null,
      service: "psn",
      completionRate: getTitlePlatinumEarnedRate(mergedTrophies) ?? undefined,
      completedOn: getCompletedOnDateTime(mergedTrophies),
      iconUrl: currentTitle.trophyTitleIconUrl
    });
  }

  return games;
};

const mergeTrophyLists = (
  titleTrophies: Trophy[],
  earnedTrophies: Trophy[],
  forTitle: TrophyTitle
) => {
  const mergedTrophies: NormalizedAchievement[] = [];

  for (const earnedTrophy of earnedTrophies) {
    const foundTitleTrophy = titleTrophies.find(
      (t) => t.trophyId === earnedTrophy.trophyId
    );

    mergedTrophies.push(
      normalizeTrophy({ ...earnedTrophy, ...foundTitleTrophy }, forTitle)
    );
  }

  return mergedTrophies;
};

const normalizeTrophy = (
  trophy: Trophy,
  currentTitle: TrophyTitle
): NormalizedAchievement => {
  return {
    points: convertTrophyTypeToPoints(trophy.trophyType),
    isEarned: trophy.earned ?? false,
    earnedDateTime:
      trophy.earned && trophy.earnedDateTime ? trophy.earnedDateTime : null,
    earnedPoints: trophy.earned
      ? convertTrophyTypeToPoints(trophy.trophyType)
      : null,
    type: trophy.trophyType,
    rarity:
      trophy.trophyRare !== undefined ? rarityMap[trophy.trophyRare] : null,
    earnedRate: trophy.trophyEarnedRate
      ? Number(trophy.trophyEarnedRate)
      : null,
    name: trophy.trophyName ?? "",
    description: trophy.trophyDetail ?? null,
    iconUrl: trophy.trophyIconUrl ?? null,
    groupId: trophy.trophyGroupId ?? null,
    service: "psn",
    gameName: sanitizeGameName(currentTitle.trophyTitleName)
  };
};

const rarityMap: Record<
  TrophyRarity,
  "Very Rare" | "Ultra Rare" | "Rare" | "Common"
> = {
  [TrophyRarity.VeryRare]: "Very Rare",
  [TrophyRarity.UltraRare]: "Ultra Rare",
  [TrophyRarity.Rare]: "Rare",
  [TrophyRarity.Common]: "Common"
};

// Some devs name their trophy lists different than the game
// names themselves. This fixes them as we find them.
const sanitizeGameName = (currentTitleName: string) => {
  let newTitleName = currentTitleName;

  if (newTitleName === "Mortal Kombat 11 Trophies") {
    newTitleName = "Mortal Kombat 11";
  }

  return newTitleName.trim();
};

const convertTrophyTypeToPoints = (
  trophyType: "bronze" | "silver" | "gold" | "platinum"
) => {
  let points = 0;
  if (trophyType === "bronze") {
    points = 15;
  } else if (trophyType === "silver") {
    points = 30;
  } else if (trophyType === "gold") {
    points = 60;
  } else if (trophyType === "platinum") {
    points = 300;
  }

  return points;
};

// This takes into account the platinum earned rate, not
// the platinum + DLC earned rate.
const getTitlePlatinumEarnedRate = (
  allGameAchievements: NormalizedAchievement[]
): number | null => {
  const foundPlatinums = allGameAchievements.filter(
    (achievement) => achievement.type === "platinum"
  );

  if (foundPlatinums.length === 0) {
    return null;
  }

  return foundPlatinums[0].earnedRate;
};

// This takes into account the platinum earned datetime, not
// the platinum + DLC earned datetime.
const getCompletedOnDateTime = (
  allGameAchievements: NormalizedAchievement[]
): string | null => {
  const foundEarnedPlatinums = allGameAchievements.filter(
    (achievement) => achievement.type === "platinum" && achievement.isEarned
  );

  if (foundEarnedPlatinums.length === 0) {
    return null;
  }

  return foundEarnedPlatinums[0].earnedDateTime;
};
