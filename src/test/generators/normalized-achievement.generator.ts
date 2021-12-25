import * as faker from "faker";

import type { NormalizedAchievement } from "@/integrations/models";

export const generateNormalizedAchievement = (
  normalizedAchievementProps?: Partial<NormalizedAchievement>
): NormalizedAchievement => {
  const isEarned = faker.datatype.boolean();
  const points = faker.random.arrayElement([5, 10, 15, 20, 25, 50]);

  return {
    isEarned,
    points,
    description: faker.random.words(10),
    earnedDateTime: faker.date.recent().toISOString(),
    earnedRate: faker.datatype.number({ min: 0.01, max: 0.99 }),
    earnedPoints: isEarned ? points : null,
    gameName: faker.random.words(3),
    groupId: null,
    iconUrl: null,
    name: faker.random.words(4),
    rarity: null,
    service: faker.random.arrayElement(["psn", "xbox", "ra"]),
    type: faker.random.arrayElement(["bronze", "silver", "gold", "platinum"]),
    ...normalizedAchievementProps
  };
};
