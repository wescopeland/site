import dayjs from "dayjs";

import type { ChartDatum } from "@/gaming/models";

import type { NormalizedGame } from "../models";
import { findAchievementsEarnedOnDate } from "./findAchievementsEarnedOnDate";
import { getFirstAchievement } from "./getFirstAchievement";

export const buildTotalPointsChartData = (
  allAccountGames: NormalizedGame[]
) => {
  // The start date is the date of the first achievement earned, minus one day.
  // This ensures the very first datum on the chart has 0's very every service.
  const startDate = getStartDate(allAccountGames);

  // We'll iterate one day at a time, building a chart node for each day.
  let activeDate = dayjs(startDate);
  let currentTotalPoints = 0;
  let currentPlaystationPoints = 0;

  const today = dayjs();
  const nodeCount = today.diff(activeDate, "days");

  // This initial datum should have all 0's.
  const data: ChartDatum[] = [
    {
      date: activeDate.toISOString(),
      totalPoints: currentTotalPoints,
      playstationPoints: currentPlaystationPoints
    }
  ];

  // For every day, build a node for the chart.
  for (let i = 0; i < nodeCount; i += 1) {
    activeDate = dayjs(activeDate).add(1, "day");

    const achievementsEarnedOnDate = findAchievementsEarnedOnDate(
      activeDate.toISOString(),
      allAccountGames
    );

    for (const achievement of achievementsEarnedOnDate) {
      currentTotalPoints += achievement.points;
      if (achievement.service === "psn") {
        currentPlaystationPoints += achievement.points;
      }
    }

    data.push({
      date: activeDate.toISOString(),
      totalPoints: currentTotalPoints,
      playstationPoints: currentPlaystationPoints
    });
  }

  return data;
};

const getStartDate = (allAccountGames: NormalizedGame[]) => {
  // The start date is the date of the first achievement earned, minus one day.
  // This ensures all points counts start at 0.
  const firstAchievement = getFirstAchievement(allAccountGames);

  return dayjs(firstAchievement.earnedDateTime).subtract(1, "day");
};