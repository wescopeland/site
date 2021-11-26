import cc from "classcat";
import type { VFC } from "react";

import { EarningsArrow } from "../EarningsArrow";

export const MostRecentAchievementCard: VFC = () => {
  return (
    <div
      className={cc([
        "w-full p-4 rounded-2xl",
        "bg-white border border-gray-100",
        "dark:border-gray-500 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-black"
      ])}
    >
      <p className="dark:text-gray-400 text-gray-500">
        Most Recent Achievement
      </p>
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
    </div>
  );
};
