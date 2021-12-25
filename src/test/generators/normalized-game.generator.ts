import * as faker from "faker";

import type { NormalizedGame } from "@/integrations/models";

export const generateNormalizedGame = (
  normalizedGameProps?: Partial<NormalizedGame>
): NormalizedGame => {
  return {
    achievements: [],
    iconUrl: null,
    completedOn: null,
    lastEarnedOn: faker.date.recent().toISOString(),
    name: faker.random.words(3),
    platform: "PS3",
    service: faker.random.arrayElement(["psn", "xbox", "ra"]),
    ...normalizedGameProps
  };
};
