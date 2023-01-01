import dayjs from "dayjs";

import { NormalizedAchievement } from "../models";

export const findAchievementsEarnedOnDate = (
  isoDate: string,
  allAchievements: NormalizedAchievement[]
) => {
  const givenDate = dayjs(isoDate);

  const foundAchievements: NormalizedAchievement[] = [];
  const spliceIndices: number[] = [];

  // eslint-disable-next-line unicorn/no-for-loop
  for (let i = 0; i < allAchievements.length; i += 1) {
    const wasEarnedOnGivenDay = dayjs(allAchievements[i].earnedDateTime).isSame(
      givenDate,
      "day"
    );
    const wasEarnedAfterGivenDay = dayjs(
      allAchievements[i].earnedDateTime
    ).isAfter(givenDate, "day");

    if (wasEarnedOnGivenDay) {
      foundAchievements.push(allAchievements[i]);
      spliceIndices.push(i);
    } else if (wasEarnedAfterGivenDay) {
      break;
    }
  }

  for (const spliceIndex of spliceIndices) {
    allAchievements.splice(spliceIndex, 1);
  }

  return foundAchievements;
};
