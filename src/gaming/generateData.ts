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

export const generateData = () => {
  const nodeCount = 3;

  let currentDate = new Date("07-15-2018");
  let currentTotalPoints = 20;
  let currentXboxPoints = 20;
  let currentPlaystationPoints = 0;
  let currentRetroAchievementsPoints = 0;

  const data: ChartDatum[] = [
    {
      date: currentDate.toISOString(),
      totalPoints: currentTotalPoints,
      xboxPoints: currentXboxPoints,
      playstationPoints: currentPlaystationPoints,
      retroAchievementsPoints: currentRetroAchievementsPoints
    }
  ];

  for (let i = 0; i < nodeCount; i += 1) {
    // Pick a random number between 1 and 3. This will determine
    // which service gained points for this node.
    const oneToThree = faker.datatype.number({ min: 1, max: 3 });

    const earnedPoints = faker.random.arrayElement([
      0, 0, 0, 5, 10, 15, 20, 25, 50
    ]);

    currentDate = dayjs(currentDate).add(1, "day").toDate();
    currentTotalPoints += earnedPoints;

    if (oneToThree === 1) {
      currentXboxPoints += earnedPoints;
    } else if (oneToThree === 2) {
      currentPlaystationPoints += earnedPoints;
    } else if (oneToThree === 3) {
      currentRetroAchievementsPoints += earnedPoints;
    }

    data.push({
      date: currentDate.toISOString(),
      totalPoints: currentTotalPoints,
      xboxPoints: currentXboxPoints,
      playstationPoints: currentPlaystationPoints,
      retroAchievementsPoints: currentRetroAchievementsPoints
    });
  }

  return data;
};
