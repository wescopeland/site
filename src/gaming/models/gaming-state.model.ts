import type {
  NormalizedAchievement,
  NormalizedGame
} from "@/integrations/models";

import { ChartDatum } from "./chart-datum.model";

export interface GamingState {
  serviceSummaries: {
    platinumCount: number;
    gamerscoreCount: number;
    masteryCount: number;
  };

  mostRecentGame: NormalizedGame | null;
  mostRecentAchievement: NormalizedAchievement | null;
  mostRecentCompletion: NormalizedGame | null;

  totalPointsChartData: ChartDatum[];

  rarestAchievements: NormalizedAchievement[];
  rarestCompletions: NormalizedGame[];
}
