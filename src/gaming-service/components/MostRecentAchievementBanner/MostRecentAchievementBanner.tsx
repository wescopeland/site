import type { FC } from "react";

import { BaseStatsBanner } from "@/core/components/BaseStatsBanner";

import { TrophyPin } from "../TrophyPin";

export const MostRecentAchievementBanner: FC = () => {
  return (
    <BaseStatsBanner>
      <div className="inline-flex flex-col flex-grow md:flex-row gap-x-2">
        <p className="tracking-tight text-gray-500 dark:text-gray-400">
          Most Recent Trophy<span className="hidden sm:inline">:</span>
        </p>
        <div className="flex gap-x-3">
          <p className="flex text-black dark:text-white">Taking a Liberty</p>
          <TrophyPin grade="gold" />
        </div>
      </div>

      <div className="hidden md:inline-flex gap-x-2">
        <p className="tracking-tight text-gray-500 dark:text-gray-400">
          GTA IV
        </p>
      </div>

      <div className="flex md:hidden gap-x-2 md:gap-x-0">
        <p className="text-black dark:text-white">GTA IV</p>
      </div>
    </BaseStatsBanner>
  );
};
