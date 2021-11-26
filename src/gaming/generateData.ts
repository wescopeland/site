import dayjs from "dayjs";
import * as faker from "faker";

import type { ChartDatum } from "@/gaming/models";

const generateChartDatum = (
  overviewChartDatumProps: Partial<ChartDatum>
): ChartDatum => {
  return {
    date: faker.datatype.datetime().toISOString(),
    totalPoints: faker.datatype.number({ min: 0, max: 100_000 }),
    xboxPoints: faker.datatype.number({ min: 0, max: 100_000 }),
    playstationPoints: faker.datatype.number({ min: 0, max: 100_000 }),
    retroAchievementsPoints: faker.datatype.number({ min: 0, max: 100_000 }),
    ...overviewChartDatumProps
  };
};

export const generateData = (startDate: string) => {
  let activeDate = dayjs(startDate).subtract(1, "day");
  let currentTotalPoints = 0;
  let currentXboxPoints = 0;
  let currentPlaystationPoints = 0;
  let currentRetroPoints = 0;

  const today = dayjs();
  const nodeCount = today.diff(activeDate, "days");

  const data: ChartDatum[] = [
    {
      date: activeDate.toISOString(),
      totalPoints: currentTotalPoints,
      xboxPoints: currentXboxPoints,
      playstationPoints: currentPlaystationPoints,
      retroAchievementsPoints: currentRetroPoints
    }
  ];

  for (let i = 0; i < nodeCount; i += 1) {
    // Pick a random number between 1 and 3. This will determine
    // which service gained points for this node.
    const oneToThree = faker.datatype.number({ min: 1, max: 3 });

    const earnedPoints = faker.random.arrayElement([
      0, 0, 0, 5, 10, 15, 20, 25, 50
    ]);

    activeDate = dayjs(activeDate).add(1, "day");
    currentTotalPoints += earnedPoints;

    if (oneToThree === 1) {
      currentXboxPoints += earnedPoints;
    } else if (oneToThree === 2) {
      currentPlaystationPoints += earnedPoints;
    } else if (oneToThree === 3) {
      currentRetroPoints += earnedPoints;
    }

    data.push({
      date: activeDate.toISOString(),
      totalPoints: currentTotalPoints,
      xboxPoints: currentXboxPoints,
      playstationPoints: currentPlaystationPoints,
      retroAchievementsPoints: currentRetroPoints
    });
  }

  return data;
};
