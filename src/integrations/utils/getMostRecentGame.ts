import type { NormalizedGame } from "../models";
import { getMostRecentAchievement } from "./getMostRecentAchievement";

export const getMostRecentGame = (allAccountGames: NormalizedGame[]) => {
  let mostRecentGame: NormalizedGame | null = null;

  // We're ultimately looking for the game with the
  // most recent achievement that was earned.
  const mostRecentAchievement = getMostRecentAchievement(allAccountGames);

  if (mostRecentAchievement) {
    mostRecentGame =
      allAccountGames.find((game) =>
        game.achievements.includes(mostRecentAchievement)
      ) ?? null;
  }

  return mostRecentGame;
};
