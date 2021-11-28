import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";

export const CompletionsSummaryCard: VFC = () => {
  return (
    <BaseStatsCard headingLabel="Completion Stats" isUsingAccentedBackground>
      <div className="flex flex-col">
        <p className="text-3xl text-black tracking-tight dark:text-white">
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
