import type { VFC } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

import { generateData } from "@/gaming/generateData";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

import { ChartCardBase } from "../ChartCardBase";
import { CustomTooltip } from "./CustomTooltip";
import { GradientStops } from "./GradientStops";

const gamingServiceColors = getGamingServiceColors();

const psnColor = gamingServiceColors.playstation.colors.light;
const xboxColor = gamingServiceColors.xbox.colors.light;
const raColor = gamingServiceColors.ra.colors.light;

const data = generateData();

export const TotalPointsChartCard: VFC = () => {
  return (
    <ChartCardBase
      heading="Total Points"
      subheading={
        data.length > 0
          ? data[data.length - 1].totalPoints.toLocaleString()
          : "0"
      }
    >
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart height={240} data={data}>
            <defs>
              <linearGradient
                id="stack-gradient-psn"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <GradientStops baseColor={psnColor} />
              </linearGradient>

              <linearGradient
                id="stack-gradient-xbox"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <GradientStops baseColor={xboxColor} />
              </linearGradient>

              <linearGradient
                id="stack-gradient-ra"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <GradientStops shouldFadeToTransparent baseColor={raColor} />
              </linearGradient>
            </defs>

            <Tooltip
              content={({ active, payload }) => (
                <CustomTooltip active={active} payload={payload} />
              )}
            />

            <Area
              dataKey="retroAchievementsPoints"
              type="monotone"
              stroke={raColor}
              strokeWidth={2}
              stackId="1"
              fill="url(#stack-gradient-ra)"
            />

            <Area
              dataKey="xboxPoints"
              type="monotone"
              stroke={xboxColor}
              strokeWidth={2}
              stackId="1"
              fill="url(#stack-gradient-xbox)"
            />

            <Area
              dataKey="playstationPoints"
              type="monotone"
              stroke={psnColor}
              strokeWidth={2}
              stackId="1"
              fill="url(#stack-gradient-psn)"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex w-full h-full items-center justify-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            There is no data available.
          </p>
        </div>
      )}
    </ChartCardBase>
  );
};
