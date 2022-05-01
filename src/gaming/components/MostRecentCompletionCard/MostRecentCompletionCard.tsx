import type { FC } from "react";

import { BaseStatsBanner } from "@/common/components/BaseStatsBanner";
import { formatPercentage } from "@/common/utils/formatPercentage";
import { mapPercentageToRarity } from "@/common/utils/mapPercentageToRarity";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";

import { PlatformPin } from "../PlatformPin";

export const MostRecentCompletionCard: FC = () => {
  const mostRecentCompletion = useGamingContextSelector(
    (state) => state.mostRecentCompletion
  );

  if (!mostRecentCompletion) {
    return null;
  }

  return (
    <BaseStatsBanner>
      <div className="inline-flex flex-col flex-grow md:flex-row gap-x-2">
        <p className="tracking-tight text-gray-500 dark:text-gray-400">
          Most Recent Completion<span className="hidden sm:inline">:</span>
        </p>
        <div className="flex gap-x-3">
          <>
            <p className="flex text-black dark:text-white">
              {mostRecentCompletion.name}
            </p>
            <PlatformPin platform={mostRecentCompletion.service} />
          </>
        </div>
      </div>

      <div className="hidden md:inline-flex gap-x-2">
        <>
          {mostRecentCompletion.completionRate && (
            <>
              <p className="tracking-tight text-gray-500 dark:text-gray-400">
                Rarity:
              </p>
              <div className="flex gap-x-3">
                <p className="text-black dark:text-white">
                  {formatPercentage(mostRecentCompletion.completionRate)}
                  <span className="ml-1 text-sm tracking-tight dark:text-gray-200">
                    {mapPercentageToRarity(mostRecentCompletion.completionRate)}
                  </span>
                </p>
              </div>
            </>
          )}
        </>
      </div>

      <div className="flex md:hidden gap-x-2 md:gap-x-0">
        <>
          {mostRecentCompletion.completionRate && (
            <>
              <p className="text-black dark:text-white">
                {formatPercentage(mostRecentCompletion.completionRate)} Rarity
              </p>

              <div className="flex items-center md:absolute md:right-4">
                <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                  {mapPercentageToRarity(mostRecentCompletion.completionRate)}
                </p>
              </div>
            </>
          )}
        </>
      </div>
    </BaseStatsBanner>
  );
};
