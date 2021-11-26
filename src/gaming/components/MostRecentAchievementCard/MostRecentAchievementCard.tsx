import type { VFC } from "react";

import { BaseStatsCard } from "../BaseStatsCard";
import { EarningsArrow } from "../EarningsArrow";

export const MostRecentAchievementCard: VFC = () => {
  return (
    <BaseStatsCard
      headingLabel="Most Recent Achievement"
      isUsingAccentedBackground
    >
      <div className="flex gap-x-3">
        <p className="text-black dark:text-white flex">Taking a Liberty</p>
        <EarningsArrow>100</EarningsArrow>
      </div>

      <div className="flex items-center gap-x-2">
        <p className="text-black dark:text-white">0.93% earn rate</p>
        <p className="text-sm mt-0.5 text-gray-700 dark:text-gray-300 tracking-tight">
          Ultra rare
        </p>
      </div>
    </BaseStatsCard>
  );
};
