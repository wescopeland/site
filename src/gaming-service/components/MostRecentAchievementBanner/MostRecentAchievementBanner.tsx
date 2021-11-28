import type { VFC } from "react";

import { BaseStatsBanner } from "@/core/components/BaseStatsBanner";

import { TrophyPin } from "../TrophyPin";

export const MostRecentAchievementBanner: VFC = () => {
  return (
    <BaseStatsBanner>
      <div className="inline-flex flex-col md:flex-row flex-grow gap-x-2">
        <p className="text-gray-500 dark:text-gray-400 tracking-tight">
          Most Recent Trophy<span className="hidden sm:inline">:</span>
        </p>
        <div className="flex gap-x-3">
          <p className="text-black dark:text-white flex">Taking a Liberty</p>
          <TrophyPin grade="gold" />
        </div>
      </div>

      <div className="hidden md:inline-flex gap-x-2">
        <p className="text-gray-500 dark:text-gray-400 tracking-tight">
          GTA IV
        </p>
      </div>

      <div className="md:hidden flex gap-x-2 md:gap-x-0">
        <p className="text-black dark:text-white">GTA IV</p>
      </div>
    </BaseStatsBanner>
  );
};
