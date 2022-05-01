import type { FC } from "react";

import { BaseChartCard } from "@/common/components/BaseChartCard";
import { generateData } from "@/gaming-service/generateData";

import { TrophiesChart } from "./TrophiesChart";

export const TrophiesChartCard: FC = () => {
  const data = generateData("2019-03-03");
  const finalDataNode = data.length > 0 ? data[data.length - 1] : null;

  return (
    <BaseChartCard heading="Trophies Over Time">
      {finalDataNode ? (
        <TrophiesChart chartData={data} />
      ) : (
        <div className="flex items-center justify-center w-full h-full my-auto">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            There is no data available.
          </p>
        </div>
      )}
    </BaseChartCard>
  );
};
