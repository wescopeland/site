import type { VFC } from "react";

import { BaseStatsBanner } from "@/core/components/BaseStatsBanner";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { mapPercentageToRarity } from "@/core/utils/mapPercentageToRarity";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import { NormalizedGame } from "@/integrations/models";
import { getMostRecentCompletion } from "@/integrations/utils/getMostRecentCompletion";

import { PlatformPin } from "../PlatformPin";

export const MostRecentCompletionCard: VFC = () => {
  const { allGames, isLoading } = useAllGames();

  let mostRecentCompletion: NormalizedGame | null = null;
  if (allGames) {
    mostRecentCompletion = getMostRecentCompletion(allGames);
  }

  return (
    <BaseStatsBanner>
      <div className="inline-flex flex-col md:flex-row flex-grow gap-x-2">
        <p className="text-gray-500 dark:text-gray-400 tracking-tight">
          Most Recent Completion<span className="hidden sm:inline">:</span>
        </p>
        <div className="flex gap-x-3">
          {isLoading === true ? (
            <p className="flex w-40 mt-1 h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg">
              &nbsp;
            </p>
          ) : (
            <>
              <p className="text-black dark:text-white flex">
                {mostRecentCompletion.name}
              </p>
              <PlatformPin platform={mostRecentCompletion.service} />
            </>
          )}
        </div>
      </div>

      <div className="hidden md:inline-flex gap-x-2">
        {isLoading === true ? (
          <p className="flex w-32 mt-1 h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg">
            &nbsp;
          </p>
        ) : (
          <>
            {mostRecentCompletion.completionRate && (
              <>
                <p className="text-gray-500 dark:text-gray-400 tracking-tight">
                  Rarity:
                </p>
                <div className="flex gap-x-3">
                  <p className="text-black dark:text-white">
                    {formatPercentage(mostRecentCompletion.completionRate)}
                    <span className="dark:text-gray-200 ml-1 text-sm tracking-tight">
                      {mapPercentageToRarity(
                        mostRecentCompletion.completionRate
                      )}
                    </span>
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <div className="md:hidden flex gap-x-2 md:gap-x-0">
        {isLoading === true ? (
          <p className="flex w-32 mt-1 h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg">
            &nbsp;
          </p>
        ) : (
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
        )}
      </div>
    </BaseStatsBanner>
  );
};
