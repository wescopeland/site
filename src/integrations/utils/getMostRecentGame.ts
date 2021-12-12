import type { NormalizedGame } from "../models";

export const getMostRecentGame = (allAccountGames: NormalizedGame[]) => {
  let mostRecentGame: NormalizedGame | null = null;
  let mostRecentEarnedDateTime: string | null = null;

  // We're ultimately looking for the achievement with the
  // most recent `earnedDateTime` value. This will identify
  // to us what the most recent game was.
  for (const game of allAccountGames) {
    for (const achievement of game.achievements) {
      if (achievement.earnedDateTime) {
        // We'll fall into this if block on the very first
        // earned achievement we find from the list.
        if (!mostRecentGame && !mostRecentEarnedDateTime) {
          mostRecentGame = game;
          mostRecentEarnedDateTime = achievement.earnedDateTime;
        } else {
          const mostRecentEarnedDate = new Date(mostRecentEarnedDateTime);
          const currentAchievementEarnedDate = new Date(
            achievement.earnedDateTime
          );

          // Did the date we're looking at happen more recently than
          // the currently-tracked most recent earned date?
          if (currentAchievementEarnedDate > mostRecentEarnedDate) {
            mostRecentGame = game;
            mostRecentEarnedDateTime = achievement.earnedDateTime;
          }
        }
      }
    }
  }

  return mostRecentGame;
};
