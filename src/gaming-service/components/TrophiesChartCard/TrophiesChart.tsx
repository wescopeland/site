import type { VFC } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

import { AreaChartGradientStops } from "@/core/components/AreaChartGradientStops";
import type { TrophiesChartDatum } from "@/gaming-service/models";

import type { ChartDatumWithCounts } from "./chart-datum-with-counts.model";
import { CustomTooltip } from "./CustomTooltip";

const bronzeColor = "#92400e";
const silverColor = "#a1a1aa";
const goldColor = "#facc15";
const platinumColor = "#93c5fd";

export interface TrophiesChartProps {
  chartData: TrophiesChartDatum[];
}

export const TrophiesChart: VFC<TrophiesChartProps> = ({ chartData }) => {
  if (chartData.length === 0) {
    return null;
  }

  const mappedChartDatumWithCounts =
    mapTrophiesChartDatumToChartDatumWithCounts(chartData);
  const finalDataNode =
    mappedChartDatumWithCounts.length > 0
      ? mappedChartDatumWithCounts[mappedChartDatumWithCounts.length - 1]
      : null;

  return (
    <ResponsiveContainer width="100%" height={274}>
      <AreaChart height={274} data={mappedChartDatumWithCounts}>
        <defs>
          <linearGradient
            id="stack-gradient-bronze"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <AreaChartGradientStops
              baseColor={bronzeColor}
              shouldFadeToTransparent
            />
          </linearGradient>

          <linearGradient
            id="stack-gradient-silver"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <AreaChartGradientStops baseColor={silverColor} />
          </linearGradient>

          <linearGradient id="stack-gradient-gold" x1="0" y1="0" x2="0" y2="1">
            <AreaChartGradientStops baseColor={goldColor} />
          </linearGradient>

          <linearGradient
            id="stack-gradient-platinum"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <AreaChartGradientStops baseColor={platinumColor} />
          </linearGradient>
        </defs>

        <Tooltip
          content={({ active, payload }) => (
            <CustomTooltip active={active ?? false} payload={payload ?? []} />
          )}
        />

        {finalDataNode?.bronzeCount && (
          <Area
            dataKey="bronzeCount"
            type="monotone"
            stroke={bronzeColor}
            strokeWidth={2}
            fill="url(#stack-gradient-bronze)"
            stackId="1"
          />
        )}

        {finalDataNode?.silverCount && (
          <Area
            dataKey="silverCount"
            type="monotone"
            stroke={silverColor}
            strokeWidth={2}
            fill="url(#stack-gradient-silver)"
            stackId="1"
          />
        )}

        {finalDataNode?.goldCount && (
          <Area
            dataKey="goldCount"
            type="monotone"
            stroke={goldColor}
            strokeWidth={2}
            fill="url(#stack-gradient-gold)"
            stackId="1"
          />
        )}

        {finalDataNode?.platinumCount && (
          <Area
            dataKey="platinumCount"
            type="monotone"
            stroke={platinumColor}
            strokeWidth={2}
            fill="url(#stack-gradient-platinum)"
            stackId="1"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

const mapTrophiesChartDatumToChartDatumWithCounts = (
  chartDatum: TrophiesChartDatum[]
): ChartDatumWithCounts[] => {
  const chartAreas = [];

  let totalBronzeCount = 0;
  let totalSilverCount = 0;
  let totalGoldCount = 0;
  let totalPlatinumCount = 0;

  for (const datum of chartDatum) {
    totalBronzeCount += datum.trophies.filter(
      (t) => t.grade === "bronze"
    ).length;

    totalSilverCount += datum.trophies.filter(
      (t) => t.grade === "silver"
    ).length;

    totalGoldCount += datum.trophies.filter((t) => t.grade === "gold").length;

    totalPlatinumCount += datum.trophies.filter(
      (t) => t.grade === "platinum"
    ).length;

    chartAreas.push({
      ...datum,
      bronzeCount: totalBronzeCount,
      silverCount: totalSilverCount,
      goldCount: totalGoldCount,
      platinumCount: totalPlatinumCount
    });
  }

  return chartAreas;
};
