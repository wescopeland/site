import * as faker from "faker";

import type { NormalizedGame } from "@/integrations/models";
import { generateNormalizedGame } from "@/test/generators";

import { getUserMasteryCount } from "./getUserMasteryCount";

describe("Util: getUserMasteryCount", () => {
  it("is defined #sanity", () => {
    // ASSERT
    expect(getUserMasteryCount).toBeDefined();
  });

  it("given an empty list of games, returns 0", () => {
    // ARRANGE
    const mockGames: NormalizedGame[] = [];

    // ACT
    const masteryCount = getUserMasteryCount(mockGames);

    // ASSERT
    expect(masteryCount).toEqual(0);
  });

  it("given a list of games, returns the number of RA games mastered", () => {
    // ARRANGE
    const mockGames: NormalizedGame[] = [
      generateNormalizedGame({ service: "ra" }),
      generateNormalizedGame({ service: "ra" }),
      generateNormalizedGame({
        service: "ra",
        completedOn: faker.date.recent().toISOString()
      })
    ];

    // ACT
    const masteryCount = getUserMasteryCount(mockGames);

    // ASSERT
    expect(masteryCount).toEqual(1);
  });
});
