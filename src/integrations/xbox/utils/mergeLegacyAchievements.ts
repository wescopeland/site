import { XboxOldAchievement } from "../models";

export const mergeLegacyAchievements = (achievements: {
  allAchievements: XboxOldAchievement[];
  unlockedAchievements: XboxOldAchievement[];
}) => {
  const { allAchievements, unlockedAchievements } = achievements;
  const modifiedAllAchievements = [...allAchievements];

  // For each achievement the user has unlocked, find it
  // in the list of all achievements and replace its content.
  for (const unlockedAchievement of unlockedAchievements) {
    const foundAchievementIndex = modifiedAllAchievements.findIndex(
      (el) => el.id === unlockedAchievement.id
    );

    if (foundAchievementIndex !== -1) {
      modifiedAllAchievements[foundAchievementIndex] = unlockedAchievement;
    }
  }

  return modifiedAllAchievements;
};
