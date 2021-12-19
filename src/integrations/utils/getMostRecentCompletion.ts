import type { NormalizedGame } from "../models";
import { getMostRecentGame } from "./getMostRecentGame";

export const getMostRecentCompletion = (allAccountGames: NormalizedGame[]) => {
  // First, let's distill our game list down to only completed games.
  const completedGames = allAccountGames.filter(
    (game) =>
      !game.achievements.some((achievement) => achievement.isEarned === false)
  );

  // Of these completed games, let's find the one with the most
  // recently-earned achievement. That'll be our most recently
  // completed game.
  return getMostRecentGame(completedGames);
};
