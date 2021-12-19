import type { NormalizedAchievement, NormalizedGame } from "../models";

export const findRarestAchievements = (
  allGames: NormalizedGame[],
  options?: Partial<{
    limit: number;
    useOneAchievementPerGame: boolean;
  }>
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

  let finalAchievementsList = sortedByEarnedRate;

  if (options?.useOneAchievementPerGame) {
    const withOnlyOneAchievementPerGame: NormalizedAchievement[] = [];

    const seenGames: string[] = [];
    for (const achievement of sortedByEarnedRate) {
      if (!seenGames.includes(achievement.gameName)) {
        seenGames.push(achievement.gameName);
        withOnlyOneAchievementPerGame.push(achievement);
      }
    }

    finalAchievementsList = withOnlyOneAchievementPerGame;
  }

  return options?.limit
    ? finalAchievementsList.slice(0, options.limit)
    : finalAchievementsList;
};
