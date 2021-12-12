import type { NormalizedGame } from "../models";

export const findRarestAchievements = (
  allGames: NormalizedGame[],
  limit?: number
) => {
  const allAchievements = allGames.flatMap((game) => game.achievements);

  const onlyEarnedAchievements = allAchievements.filter(
    (achievement) => achievement.isEarned
  );

  const sortedByEarnedRate = onlyEarnedAchievements.sort(
    (a, b) => a.earnedRate - b.earnedRate
  );

  return limit ? sortedByEarnedRate.slice(0, limit) : sortedByEarnedRate;
};
