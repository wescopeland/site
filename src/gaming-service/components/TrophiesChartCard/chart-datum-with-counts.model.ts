import type { TrophiesChartDatum } from "@/gaming-service/models";

export type ChartDatumWithCounts = TrophiesChartDatum & {
  bronzeCount: number;
  silverCount: number;
  goldCount: number;
  platinumCount: number;
};
