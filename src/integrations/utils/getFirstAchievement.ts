import type { NormalizedAchievement, NormalizedGame } from "../models";

export const getFirstAchievement = (allAccountGames: NormalizedGame[]) => {
  let oldestAchievement: NormalizedAchievement | null;
  let oldestAchievementDateTime: string | null;

  // We're ultimately looking for the achievement with the
  // most oldest `earnedDateTime` value.
  const allAchievements = allAccountGames.flatMap((game) => game.achievements);

  for (const achievement of allAchievements) {
    if (achievement.isEarned && achievement.earnedDateTime) {
      // We'll fall into this if block on the very first
      // earned achievement we find from the list.
      if (!oldestAchievement && !oldestAchievementDateTime) {
        oldestAchievement = achievement;
        oldestAchievementDateTime = achievement.earnedDateTime;
      } else {
        const oldestEarnedDate = new Date(oldestAchievementDateTime);
        const currentAchievementEarnedDate = new Date(
          achievement.earnedDateTime
        );

        // Did the date we're looking at happen further in the past than
        // the currently-tracked oldest earned date?
        if (currentAchievementEarnedDate < oldestEarnedDate) {
          oldestAchievement = achievement;
          oldestAchievementDateTime = achievement.earnedDateTime;
        }
      }
    }
  }

  return oldestAchievement;
};
