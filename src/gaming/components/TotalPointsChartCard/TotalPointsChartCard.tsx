import type { VFC } from "react";

import { BaseChartCard } from "@/core/components/BaseChartCard";
import { LoadOnVisible } from "@/core/components/LoadOnVisible";
import { generateData } from "@/gaming/generateData";

import { DynamicTotalPointsChart } from "./TotalPointsChart";

export const TotalPointsChartCard: VFC = () => {
  const data = generateData("2019-03-03");
  const finalDataNode = data.length > 0 ? data[data.length - 1] : null;

  return (
    <BaseChartCard
      heading="Total Points"
      subheading={
        finalDataNode ? finalDataNode.totalPoints.toLocaleString() : "0"
      }
    >
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
    </BaseChartCard>
  );
};
