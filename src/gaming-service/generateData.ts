import dayjs from "dayjs";
import * as faker from "faker";

import type { ChartTrophy, TrophiesChartDatum } from "@/gaming-service/models";

const generateChartTrophy = (chartTrophyProps: Partial<ChartTrophy>) => {
  return {
    grade: faker.random.arrayElement([
      "bronze",
      "silver",
      "gold",
      "platinum"
    ]) as any,
    gameName: faker.random.words(faker.datatype.number({ min: 1, max: 4 })),
    trophyName: faker.random.words(faker.datatype.number({ min: 1, max: 4 })),
    ...chartTrophyProps
  };
};

export const generateData = (startDate: string) => {
  let activeDate = dayjs(startDate).subtract(1, "day");
  let currentTotalTrophies = 0;

  const today = dayjs();
  const nodeCount = today.diff(activeDate, "days");

  const data: TrophiesChartDatum[] = [
    {
      date: activeDate.toISOString(),
      totalTrophies: 0,
      trophies: []
    }
  ];

  for (let i = 0; i < nodeCount; i += 1) {
    activeDate = dayjs(activeDate).add(1, "day");
    const dayTrophyCount = faker.datatype.number({ min: 0, max: 3 });

    const generatedTrophies = [];
    for (let j = 0; j < dayTrophyCount; j += 1) {
      // Pick a random number between 1 and 50. This will determine
      // which trophy grade was earned for this node.
      const oneToFifty = faker.datatype.number({ min: 1, max: 50 });

      let grade: any = "bronze";
      if (oneToFifty === 1) {
        grade = "platinum";
      } else if (oneToFifty >= 2 && oneToFifty < 20) {
        grade = "silver";
      } else if (oneToFifty >= 20 && oneToFifty < 28) {
        grade = "gold";
      }

      currentTotalTrophies += 1;
      generatedTrophies.push(generateChartTrophy({ grade }));
    }

    data.push({
      date: activeDate.toISOString(),
      totalTrophies: currentTotalTrophies,
      trophies: generatedTrophies
    });
  }

  return data;
};
