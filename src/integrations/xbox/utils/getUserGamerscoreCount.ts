import type { NormalizedGame } from "@/integrations/models";

export const getUserGamerscoreCount = (games: NormalizedGame[]) => {
  let gamerscoreCount = 0;

  const allAchievements = games
    .filter((game) => game.service === "xbox")
    .flatMap((game) => game.achievements);

  for (const achievement of allAchievements) {
    if (achievement.isEarned) {
      gamerscoreCount += achievement.earnedPoints ?? 0;
    }
  }

  return gamerscoreCount;
};
