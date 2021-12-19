import type { TrophyCounts } from "psn-api";

import type { NormalizedAchievement } from "./normalized-achievement.model";

export interface NormalizedGame {
  achievements: NormalizedAchievement[];
  iconUrl: string | null;
  completedOn: string | null;
  lastEarnedOn: string | null;
  name: string;
  platform: string;
  service: "psn" | "xbox" | "ra";

  completionRate?: number;
  trophyTypeCounts?: TrophyCounts;
  earnedCounts?: TrophyCounts;
}
