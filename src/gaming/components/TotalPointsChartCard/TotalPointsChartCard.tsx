import type { VFC } from "react";
import { memo } from "react";

import { BaseChartCard } from "@/core/components/BaseChartCard";
import { LoadOnVisible } from "@/core/components/LoadOnVisible";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import type { ChartDatum } from "@/gaming/models";
import { buildTotalPointsChartData } from "@/integrations/utils/buildTotalPointsChartData";

import { DynamicTotalPointsChart } from "./TotalPointsChart";

export const TotalPointsChartCard: VFC = memo(() => {
  const { allGames, isLoading } = useAllGames();

  let chartData: ChartDatum[] | null = null;
  let finalDataNode: ChartDatum | null = null;
  if (allGames) {
    chartData = buildTotalPointsChartData(allGames);
    finalDataNode =
      chartData.length > 0 ? chartData[chartData.length - 1] : null;
  }

  return (
    <BaseChartCard
      heading="Total Points"
      isLoading={isLoading}
      subheading={
        finalDataNode ? finalDataNode.totalPoints.toLocaleString() : "0"
      }
    >
      {isLoading === true ? (
        <>
          <div className="mt-2 bg-gray-200 dark:bg-gray-600 animate-pulse h-[232px] w-full rounded">
            &nbsp;
          </div>
        </>
      ) : (
        <>
          {finalDataNode ? (
            <LoadOnVisible>
              <DynamicTotalPointsChart chartData={chartData} />
            </LoadOnVisible>
          ) : (
            <div className="flex my-auto w-full h-full items-center justify-center">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                There is no data available.
              </p>
            </div>
          )}
        </>
      )}
    </BaseChartCard>
  );
});
