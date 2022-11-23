import pLimit from "p-limit";
import type {
  Achievement,
  GameInfoAndUserProgress,
  UserGameCompletion
} from "retroachievements-js";

import { mapPercentageToRarity } from "@/common/utils/mapPercentageToRarity";
import type {
  NormalizedAchievement,
  NormalizedGame
} from "@/integrations/models";
import { getGameLastEarnedOn } from "@/integrations/utils/getGameLastEarnedOn";

import retroAchievementsClient from "../client";

export const fetchAllRaGames = async (
  targetUserName: string
): Promise<NormalizedGame[]> => {
  const userGameCompletionStats =
    await retroAchievementsClient.getUserGameCompletionStats(targetUserName);

  const dedupedGameCompletionStats = dedupeUserGameCompletionStats(
    userGameCompletionStats
  );

  const limit = pLimit(2);
  const userGameProgressForGameIdPromises: Promise<GameInfoAndUserProgress>[] =
    [];

  for (const game of dedupedGameCompletionStats) {
    userGameProgressForGameIdPromises.push(
      limit(() =>
        retroAchievementsClient.getUserProgressForGameId(
          targetUserName,
          game.gameId
        )
      )
    );
  }

  const userGameProgressForGameIdResponses = await Promise.all(
    userGameProgressForGameIdPromises
  );

  const normalizedGames: NormalizedGame[] = [];
  for (const rawGame of userGameProgressForGameIdResponses) {
    const normalizedAchievements: NormalizedAchievement[] = [];
    for (const rawAchievement of rawGame.achievements) {
      normalizedAchievements.push(
        normalizeAchievement(
          rawAchievement,
          rawGame.numDistinctPlayersCasual,
          rawGame.title
        )
      );
    }

    const completionRate = await getTitleCompletionRate(
      rawGame.id,
      rawGame.numDistinctPlayersCasual
    );

    normalizedGames.push({
      name: rawGame.title,
      platform: rawGame.consoleName,
      achievements: normalizedAchievements,
      lastEarnedOn: getGameLastEarnedOn(normalizedAchievements) ?? null,
      service: "ra",
      completionRate: completionRate ?? undefined,
      completedOn: getCompletedOnDateTime(
        normalizedAchievements,
        rawGame.numAchievements,
        rawGame.numAwardedToUserHardcore
      ),
      iconUrl: `https://retroachievements.org${rawGame.imageIcon}`
    });
  }

  return normalizedGames;
};

// The user game completion stats endpoint returns two entries for each game,
// one corresponding to the normal earnings and another for the hardcore
// earnings. We just want the user's list of games, so let's strip every
// duplicate entry from this list.
const dedupeUserGameCompletionStats = (
  userGameCompletionStats: UserGameCompletion[]
) => {
  const deduped: UserGameCompletion[] = [];

  const recordedGameIds: number[] = [];
  for (const userGameCompletionStat of userGameCompletionStats) {
    if (!recordedGameIds.includes(userGameCompletionStat.gameId)) {
      recordedGameIds.push(userGameCompletionStat.gameId);
      deduped.push(userGameCompletionStat);
    }
  }

  return deduped;
};

const normalizeAchievement = (
  achievement: Achievement,
  totalPlayers: number,
  gameName: string
): NormalizedAchievement => {
  let earnedStatus: "unearned" | "basic" | "hardcore" = "unearned";
  if (achievement.dateEarnedHardcore) {
    earnedStatus = "hardcore";
  } else if (achievement.dateEarned) {
    earnedStatus = "basic";
  }

  let earnedPoints = null;
  if (earnedStatus === "basic") {
    earnedPoints = achievement.points;
  } else if (earnedStatus === "hardcore") {
    earnedPoints = achievement.points * 2;
  }

  return {
    gameName,
    earnedPoints,
    // Points is doubled due to regular and hardcore mode.
    // Hardcore unlocks are worth double.
    points: achievement.points * 2,
    isEarned: earnedStatus !== "unearned",
    earnedDateTime:
      achievement.dateEarnedHardcore?.toISOString() ??
      achievement.dateEarned?.toISOString() ??
      null,
    rarity: getAchievementRarityLabel(
      totalPlayers,
      achievement.numAwardedHardcore
    ),
    earnedRate: getAchievementEarnedRate(
      totalPlayers,
      achievement.numAwardedHardcore
    ),
    name: achievement.title,
    description: achievement.description,
    iconUrl: `https://s3-eu-west-1.amazonaws.com/i.retroachievements.org/Badge/${achievement.badgeName}.png`,
    service: "ra",
    groupId: null,
    type: null
  };
};

const getAchievementEarnedRate = (
  totalPlayers: number,
  totalHardcoreEarners: number
) => {
  return totalPlayers / totalHardcoreEarners;
};

const getAchievementRarityLabel = (
  totalPlayers: number,
  totalHardcoreEarners: number
) => {
  const earnedRate = getAchievementEarnedRate(
    totalPlayers,
    totalHardcoreEarners
  );

  return mapPercentageToRarity(earnedRate * 100);
};

const getCompletedOnDateTime = (
  allGameAchievements: NormalizedAchievement[],
  achievementCount: number,
  earnedHardcoreAchievementCount: number
): string | null => {
  if (earnedHardcoreAchievementCount !== achievementCount) {
    return null;
  }

  return getGameLastEarnedOn(allGameAchievements) ?? null;
};

const getTitleCompletionRate = async (gameId: number, playerCount: number) => {
  // We'll compare the total number of casual players to the total
  // number of 100%'ers on hardcore mode to get our final percentage.
  const distributionResponse =
    await retroAchievementsClient.getAchievementDistributionForGameId(
      gameId,
      true
    );

  const earningDistributions = Object.entries(distributionResponse);

  if (earningDistributions.length === 0) {
    return null;
  }

  const [, numberOfCompletionists] =
    earningDistributions[earningDistributions.length - 1];

  return numberOfCompletionists / playerCount;
};
