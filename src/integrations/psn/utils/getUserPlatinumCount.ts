import type { NormalizedGame } from "@/integrations/models";

export const getUserPlatinumCount = (games: NormalizedGame[]) => {
  let platinumCount = 0;

  for (const game of games) {
    if (game.earnedCounts) {
      platinumCount += game.earnedCounts.platinum;
    }
  }

  return platinumCount;
};
