import type { VFC } from "react";

import { BaseChartCard } from "@/core/components/BaseChartCard";
import { generateData } from "@/gaming-service/generateData";

import { TrophiesChart } from "./TrophiesChart";

export const TrophiesChartCard: VFC = () => {
  const data = generateData("2019-03-03");
  const finalDataNode = data.length > 0 ? data[data.length - 1] : null;

  return (
    <BaseChartCard heading="Trophies Over Time">
      {finalDataNode ? (
        <TrophiesChart chartData={data} />
      ) : (
        <div className="flex w-full h-full my-auto items-center justify-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            There is no data available.
          </p>
        </div>
      )}
    </BaseChartCard>
  );
};
