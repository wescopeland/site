import type { FC } from "react";
import { memo } from "react";

import { BaseChartCard } from "@/core/components/BaseChartCard";
import { LoadOnVisible } from "@/core/components/LoadOnVisible";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";

import { DynamicTotalPointsChart } from "./TotalPointsChart";

export const TotalPointsChartCard: FC = memo(() => {
  const totalPointsChartData = useGamingContextSelector(
    (state) => state.totalPointsChartData
  );

  const finalDataNode =
    totalPointsChartData.length > 0
      ? totalPointsChartData[totalPointsChartData.length - 1]
      : null;

  return (
    <BaseChartCard
      heading="Total Points"
      subheading={
        finalDataNode ? finalDataNode.totalPoints.toLocaleString() : "0"
      }
    >
      <>
        {finalDataNode && finalDataNode.totalPoints > 0 ? (
          <LoadOnVisible>
            <DynamicTotalPointsChart chartData={totalPointsChartData} />
          </LoadOnVisible>
        ) : (
          <div className="flex items-center justify-center w-full h-full my-auto">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              There is no data available.
            </p>
          </div>
        )}
      </>
    </BaseChartCard>
  );
});
