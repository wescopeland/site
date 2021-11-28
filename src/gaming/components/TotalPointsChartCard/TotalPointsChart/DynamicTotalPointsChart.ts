import dynamic from "next/dynamic";

import type { TotalPointsChartProps } from "./TotalPointsChart";

export const DynamicTotalPointsChart = dynamic<TotalPointsChartProps>(
  () => import("./TotalPointsChart").then((m) => m.TotalPointsChart),
  { ssr: false }
);
