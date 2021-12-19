import type { NormalizedGame } from "../models";

export const findRarestAchievements = (
  allGames: NormalizedGame[],
  limit?: number
) => {
  const allAchievements = allGames.flatMap((game) => game.achievements);

  const onlyEarnedAchievements = allAchievements.filter(
    (achievement) => achievement.isEarned && achievement.earnedRate !== null
  );

  const sortedByEarnedRate = onlyEarnedAchievements.sort((a, b) => {
    if (a.earnedRate === null || b.earnedRate === null) {
      return 0;
    }

    return a.earnedRate - b.earnedRate;
  });

  return limit ? sortedByEarnedRate.slice(0, limit) : sortedByEarnedRate;
};
