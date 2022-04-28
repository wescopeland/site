import type { FC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";

export const CompletionsSummaryCard: FC = () => {
  return (
    <BaseStatsCard headingLabel="Completion Stats" isUsingAccentedBackground>
      <div className="flex flex-col">
        <p className="text-3xl tracking-tight text-black dark:text-white">
          59.63%
        </p>

        <p className="text-gray-800 dark:text-gray-200">21 of 42 games</p>
        <p className="text-gray-800 dark:text-gray-200">
          1,038 of 1,665 trophies
        </p>
      </div>
    </BaseStatsCard>
  );
};
