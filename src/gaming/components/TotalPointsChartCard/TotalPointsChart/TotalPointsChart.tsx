import type { FC } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

import { AreaChartGradientStops } from "@/core/components/AreaChartGradientStops";
import type { ChartDatum } from "@/gaming/models";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

import { CustomTooltip } from "./CustomTooltip";

const gamingServiceColors = getGamingServiceColors();

const psnColor = gamingServiceColors.playstation.colors.light;
const xboxColor = gamingServiceColors.xbox.colors.light;
const raColor = gamingServiceColors.ra.colors.light;

export interface TotalPointsChartProps {
  chartData: ChartDatum[];
}

export const TotalPointsChart: FC<TotalPointsChartProps> = ({ chartData }) => {
  const finalDataNode =
    chartData.length > 0 ? chartData[chartData.length - 1] : null;

  if (!finalDataNode) {
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart height={240} data={chartData}>
        <defs>
          <linearGradient id="stack-gradient-psn" x1="0" y1="0" x2="0" y2="1">
            <AreaChartGradientStops baseColor={psnColor} />
          </linearGradient>

          <linearGradient id="stack-gradient-xbox" x1="0" y1="0" x2="0" y2="1">
            <AreaChartGradientStops baseColor={xboxColor} />
          </linearGradient>

          <linearGradient id="stack-gradient-ra" x1="0" y1="0" x2="0" y2="1">
            <AreaChartGradientStops
              shouldFadeToTransparent
              baseColor={raColor}
            />
          </linearGradient>
        </defs>

        <Tooltip
          content={({ active, payload }) => (
            <CustomTooltip
              active={active ?? false}
              finalDataNode={finalDataNode}
              payload={payload ?? []}
            />
          )}
        />

        {finalDataNode.retroAchievementsPoints && (
          <Area
            dataKey="retroAchievementsPoints"
            type="monotone"
            stroke={raColor}
            strokeWidth={2}
            stackId="1"
            fill="url(#stack-gradient-ra)"
          />
        )}

        {finalDataNode.xboxPoints && (
          <Area
            dataKey="xboxPoints"
            type="monotone"
            stroke={xboxColor}
            strokeWidth={2}
            stackId="1"
            fill="url(#stack-gradient-xbox)"
          />
        )}

        {finalDataNode.playstationPoints && (
          <Area
            dataKey="playstationPoints"
            type="monotone"
            stroke={psnColor}
            strokeWidth={2}
            stackId="1"
            fill="url(#stack-gradient-psn)"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};
