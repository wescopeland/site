import type { NormalizedGame } from "@/integrations/models";
import { generateNormalizedGame } from "@/test/generators";

import { getUserPlatinumCount } from "./getUserPlatinumCount";

describe("Util: getUserPlatinumCount", () => {
  it("is defined #sanity", () => {
    // ASSERT
    expect(getUserPlatinumCount).toBeDefined();
  });

  it("given an empty game list, returns 0", () => {
    // ARRANGE
    const mockGames: NormalizedGame[] = [];

    // ACT
    const platinumCount = getUserPlatinumCount(mockGames);

    // ASSERT
    expect(platinumCount).toEqual(0);
  });

  it("given a game list, returns the number of earned platinums", () => {
    // ARRANGE
    const mockGames: NormalizedGame[] = [
      generateNormalizedGame({
        earnedCounts: { platinum: 1, gold: 0, silver: 0, bronze: 2 }
      })
    ];

    // ACT
    const platinumCount = getUserPlatinumCount(mockGames);

    // ASSERT
    expect(platinumCount).toEqual(1);
  });
});
