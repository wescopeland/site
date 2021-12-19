import type { NormalizedAchievement } from "../models";

export const getGameLastEarnedOn = (
  allGameAchievements: NormalizedAchievement[]
) => {
  const withRealDates = allGameAchievements.map((achievement) => ({
    ...achievement,
    earnedDateTime: achievement.earnedDateTime
      ? new Date(achievement.earnedDateTime)
      : null
  }));

  const sortedByEarnedDateTime = withRealDates.sort((a, b) => {
    if (!a.earnedDateTime || !b.earnedDateTime) {
      return 0;
    }

    return a.earnedDateTime < b.earnedDateTime ? 1 : -1;
  });

  return sortedByEarnedDateTime[0].earnedDateTime?.toISOString();
};
