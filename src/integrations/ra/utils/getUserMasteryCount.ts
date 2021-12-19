import type { NormalizedGame } from "@/integrations/models";

export const getUserMasteryCount = (games: NormalizedGame[]) => {
  const onlyRaGames = games.filter((game) => game.service === "ra");

  let masteryCount = 0;

  for (const game of onlyRaGames) {
    if (game.completedOn) {
      masteryCount += 1;
    }
  }

  return masteryCount;
};
