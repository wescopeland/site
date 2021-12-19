import type { NormalizedAchievement, NormalizedGame } from "../models";

export const getMostRecentAchievement = (allAccountGames: NormalizedGame[]) => {
  let mostRecentAchievement: NormalizedAchievement | null = null;
  let mostRecentEarnedDateTime: string | null = null;

  // We're ultimately looking for the achievement with the
  // most recent `earnedDateTime` value.
  const allAchievements = allAccountGames.flatMap((game) => game.achievements);

  for (const achievement of allAchievements) {
    if (achievement.earnedDateTime) {
      // We'll fall into this if block on the very first
      // earned achievement we find from the list.
      if (!mostRecentAchievement && !mostRecentEarnedDateTime) {
        mostRecentAchievement = achievement;
        mostRecentEarnedDateTime = achievement.earnedDateTime;
      } else if (mostRecentEarnedDateTime) {
        const mostRecentEarnedDate = new Date(mostRecentEarnedDateTime);
        const currentAchievementEarnedDate = new Date(
          achievement.earnedDateTime
        );

        // Did the date we're looking at happen more recently than
        // the currently-tracked most recent earned date?
        if (currentAchievementEarnedDate > mostRecentEarnedDate) {
          mostRecentAchievement = achievement;
          mostRecentEarnedDateTime = achievement.earnedDateTime;
        }
      }
    }
  }

  return mostRecentAchievement;
};
