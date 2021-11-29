import type { ChartTrophy } from "./chart-trophy.model";

export interface TrophiesChartDatum {
  date: string;
  totalTrophies: number;
  trophies: ChartTrophy[];
}
