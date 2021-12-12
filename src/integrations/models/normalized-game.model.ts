import type { TrophyCounts } from "psn-api";

import type { NormalizedAchievement } from "./normalized-achievement.model";

export interface NormalizedGame {
  name: string;
  platform: string;
  achievements: NormalizedAchievement[];
  lastEarnedOn: string | null;

  trophyTypeCounts?: TrophyCounts;
  earnedCounts?: TrophyCounts;
}
