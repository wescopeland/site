import type { NormalizedGame } from "../models";

export const findRarestCompletions = (
  allGames: NormalizedGame[],
  limit?: number
) => {
  const onlyCompletedGames = allGames.filter(
    (game) => !!game.completedOn && game.completionRate !== undefined
  );

  const sortedByCompletedDate = onlyCompletedGames.sort(
    (a, b) => a.completionRate - b.completionRate
  );

  return limit ? sortedByCompletedDate.slice(0, limit) : sortedByCompletedDate;
};
