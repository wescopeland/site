import dayjs from "dayjs";

import { mapPercentageToRarity } from "@/core/utils/mapPercentageToRarity";
import type {
  NormalizedAchievement,
  NormalizedGame
} from "@/integrations/models";
import { getGameLastEarnedOn } from "@/integrations/utils/getGameLastEarnedOn";

import type {
  XboxSanitizedAchievement,
  XboxTitleHistoryElement
} from "../models";
import { authenticate } from "./authenticate";
import { fetchUserXboxTitleHistory } from "./fetchUserXboxTitleHistory";
import { fetchXuidAchievementsByTitle } from "./fetchXuidAchievementsByTitle";

export const fetchAllXboxGames = async (): Promise<NormalizedGame[]> => {
  const authorization = await authenticate();
  const { titles: xboxTitles } = await fetchUserXboxTitleHistory(authorization);

  const titleAchievementsPromises = [];

  // If a profile hasn't earned any points on a game, ignore it.
  const onlyTitlesWithEarnedPoints = xboxTitles.filter(
    (title) => title.achievement.currentGamerscore !== 0
  );

  for (const title of onlyTitlesWithEarnedPoints) {
    titleAchievementsPromises.push(
      fetchXuidAchievementsByTitle({
        title,
        userHash: authorization.user_hash,
        xstsToken: authorization.xsts_token,
        xuid: authorization.xuid
      })
    );
  }

  const titleAchievementsResponses = await Promise.all(
    titleAchievementsPromises
  );

  const games: NormalizedGame[] = [];

  for (const [
    currentIndex,
    titleAchievementsResponse
  ] of titleAchievementsResponses.entries()) {
    const currentTitle = onlyTitlesWithEarnedPoints[currentIndex];

    const normalizedAchievements = normalizeTitleAchievements(
      titleAchievementsResponse,
      currentTitle
    );

    games.push({
      name: currentTitle.name,
      platform: currentTitle.devices[currentTitle.devices.length - 1],
      achievements: normalizedAchievements,
      service: "xbox",
      iconUrl: currentTitle.displayImage,
      lastEarnedOn: getGameLastEarnedOn(normalizedAchievements),
      completedOn: getCompletedOnDateTime(
        normalizedAchievements,
        currentTitle.achievement.currentGamerscore,
        currentTitle.achievement.totalGamerscore
      )
    });
  }

  return games;
};

const normalizeTitleAchievements = (
  titleAchievements: XboxSanitizedAchievement[],
  currentTitle: XboxTitleHistoryElement
): NormalizedAchievement[] => {
  return titleAchievements.map((titleAchievement) =>
    normalizeXboxAchievement(titleAchievement, currentTitle)
  );
};

const normalizeXboxAchievement = (
  rawAchievement: XboxSanitizedAchievement,
  currentTitle: XboxTitleHistoryElement
): NormalizedAchievement => {
  return {
    points: rawAchievement.gamerScore,
    isEarned: rawAchievement.unlocked,
    earnedDateTime: rawAchievement.unlocked
      ? parseEarnedDateTime(rawAchievement.timeUnlocked)
      : null,
    earnedPoints: rawAchievement.unlocked ? rawAchievement.gamerScore : null,
    rarity: rawAchievement.earnedRate
      ? mapPercentageToRarity(rawAchievement.earnedRate)
      : null,
    earnedRate: rawAchievement.earnedRate,
    name: rawAchievement.name,
    description: rawAchievement.lockedDescription,
    iconUrl: rawAchievement.iconUrl,
    service: "xbox",
    gameName: currentTitle.name,
    groupId: null,
    type: null
  };
};

const getCompletedOnDateTime = (
  allGameAchievements: NormalizedAchievement[],
  currentGamerscore: number,
  totalGamerscore: number
) => {
  if (currentGamerscore !== totalGamerscore) {
    return null;
  }

  return getGameLastEarnedOn(allGameAchievements);
};

const parseEarnedDateTime = (timeUnlocked?: string) => {
  if (!timeUnlocked) {
    return null;
  }

  // Sometimes Xbox reports a crazy date from the 1700s as when
  // the achievement was unlocked. We obviously need to discard these.
  if (dayjs(timeUnlocked).isBefore(dayjs("2003", "year"))) {
    return null;
  }

  return timeUnlocked;
};
