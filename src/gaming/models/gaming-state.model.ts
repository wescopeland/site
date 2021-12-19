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

  mostRecentGame: NormalizedGame;
  mostRecentAchievement: NormalizedAchievement;
  mostRecentCompletion: NormalizedGame;

  totalPointsChartData: ChartDatum[];

  rarestAchievements: NormalizedAchievement[];
  rarestCompletions: NormalizedGame[];
}
