import cc from "classcat";
import type { VFC } from "react";

import { PlatformPin } from "../PlatformPin";

export const MostRecentGameCard: VFC = () => {
  return (
    <div
      className={cc([
        "w-full p-4 rounded-2xl",
        "bg-white border border-gray-100",
        "dark:border-gray-500 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-black"
      ])}
    >
      <p className="dark:text-gray-400 text-gray-500">Most Recent Game</p>
      <div className="flex gap-x-3">
        <p className="text-black dark:text-white flex">Mortal Kombat 11</p>
        <PlatformPin platform="psn" />
      </div>

      <div className="flex items-center gap-x-2">
        <p className="text-black dark:text-white">82.8% Completion</p>

        {/* This should change based on the platform.
            For PSN, achievement count. For others, points count. */}
        <p className="text-sm mt-0.5 text-gray-700 dark:text-gray-300">
          (40 of 59)
        </p>
      </div>
    </div>
  );
};
