import type { VFC } from "react";
import { memo } from "react";

import { BaseChartCard } from "@/core/components/BaseChartCard";
import { LoadOnVisible } from "@/core/components/LoadOnVisible";
import type { ChartDatum } from "@/gaming/models";

import { DynamicTotalPointsChart } from "./TotalPointsChart";

interface TotalPointsChartCardProps {
  data: ChartDatum[];
}

export const TotalPointsChartCard: VFC<TotalPointsChartCardProps> = memo(
  ({ data }) => {
    const finalDataNode = data.length > 0 ? data[data.length - 1] : null;

    return (
      <BaseChartCard
        heading="Total Points"
        subheading={
          finalDataNode ? finalDataNode.totalPoints.toLocaleString() : "0"
        }
      >
        <>
          {finalDataNode ? (
            <LoadOnVisible>
              <DynamicTotalPointsChart chartData={data} />
            </LoadOnVisible>
          ) : (
            <div className="flex my-auto w-full h-full items-center justify-center">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                There is no data available.
              </p>
            </div>
          )}
        </>
      </BaseChartCard>
    );
  }
);
