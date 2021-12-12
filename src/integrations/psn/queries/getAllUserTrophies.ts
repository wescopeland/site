import type { AuthTokensResponse, Trophy } from "psn-api";
import {
  getTitleTrophies,
  getUserTitles,
  getUserTrophiesEarnedForTitle,
  TrophyRarity
} from "psn-api";

import { NormalizedAchievement, NormalizedGame } from "@/integrations/models";

export const getAllUserTrophies = async (
  authorization: AuthTokensResponse,
  targetAccountId: string
) => {
  const { trophyTitles } = await getUserTitles(authorization, targetAccountId);

  const titleTrophiesPromises = [];
  const earnedTrophiesPromises = [];

  for (const title of trophyTitles) {
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
    // Merge the two trophy lists.
    const mergedTrophies = mergeTrophyLists(
      titleTrophiesResponse.trophies,
      earnedTrophiesResponses[currentIndex].trophies
    );

    games.push({
      name: sanitizeGameName(trophyTitles[currentIndex].trophyTitleName),
      platform: trophyTitles[currentIndex].trophyTitlePlatform,
      achievements: mergedTrophies,
      trophyTypeCounts: trophyTitles[currentIndex].definedTrophies,
      earnedCounts: trophyTitles[currentIndex].earnedTrophies,
      lastEarnedOn: getGameLastEarnedOn(mergedTrophies)
    });
  }

  return games;
};

const mergeTrophyLists = (
  titleTrophies: Trophy[],
  earnedTrophies: Trophy[]
) => {
  const mergedTrophies: NormalizedAchievement[] = [];

  for (const earnedTrophy of earnedTrophies) {
    const foundTitleTrophy = titleTrophies.find(
      (t) => t.trophyId === earnedTrophy.trophyId
    );

    mergedTrophies.push(
      normalizeTrophy({ ...earnedTrophy, ...foundTitleTrophy })
    );
  }

  return mergedTrophies;
};

const normalizeTrophy = (trophy: Trophy): NormalizedAchievement => {
  return {
    points: convertTrophyTypeToPoints(trophy.trophyType),
    isEarned: trophy.earned ?? false,
    earnedDateTime: trophy.earned ? trophy.earnedDateTime : null,
    type: trophy.trophyType,
    rarity: trophy.trophyRare ? rarityMap[trophy.trophyRare] : null,
    earnedRate: trophy.trophyEarnedRate
      ? Number(trophy.trophyEarnedRate)
      : null,
    name: trophy.trophyName,
    description: trophy.trophyDetail ?? null,
    iconUrl: trophy.trophyIconUrl,
    groupId: trophy.trophyGroupId
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

const getGameLastEarnedOn = (allGameAchievements: NormalizedAchievement[]) => {
  const withRealDates = allGameAchievements.map((achievement) => ({
    ...achievement,
    earnedDateTime: achievement.earnedDateTime
      ? new Date(achievement.earnedDateTime)
      : null
  }));

  const sortedByEarnedDateTime = withRealDates.sort((a, b) =>
    a.earnedDateTime < b.earnedDateTime ? 1 : -1
  );

  return sortedByEarnedDateTime[0].earnedDateTime?.toISOString();
};
