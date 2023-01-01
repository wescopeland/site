import dayjs from "dayjs";

import type { NormalizedAchievement, NormalizedGame } from "../models";

export const getFirstAchievement = (
  allAccountGames: NormalizedGame[]
): NormalizedAchievement | null => {
  let oldestAchievement: NormalizedAchievement | null = null;
  let oldestAchievementDateTime: string | null = null;

  // We're ultimately looking for the achievement with the
  // most oldest `earnedDateTime` value.
  const allAchievements = allAccountGames
    .flatMap((game) => game.achievements)
    .filter((achievement) => achievement.isEarned && achievement.earnedDateTime)
    .filter((achievement) =>
      dayjs(achievement.earnedDateTime).isAfter("2006", "year")
    );

  for (const achievement of allAchievements) {
    if (achievement.isEarned && achievement.earnedDateTime) {
      // We'll fall into this if block on the very first
      // earned achievement we find from the list.
      if (!oldestAchievement && !oldestAchievementDateTime) {
        oldestAchievement = achievement;
        oldestAchievementDateTime = achievement.earnedDateTime;
      } else if (oldestAchievementDateTime) {
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
