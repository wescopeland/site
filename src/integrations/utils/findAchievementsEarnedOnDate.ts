import dayjs from "dayjs";

import { NormalizedGame } from "../models";

export const findAchievementsEarnedOnDate = (
  isoDate: string,
  allGames: NormalizedGame[]
) => {
  const givenDate = dayjs(isoDate);

  const allAchievements = allGames.flatMap((game) => game.achievements);

  return allAchievements.filter((achievement) =>
    dayjs(achievement.earnedDateTime).isSame(givenDate, "day")
  );
};
