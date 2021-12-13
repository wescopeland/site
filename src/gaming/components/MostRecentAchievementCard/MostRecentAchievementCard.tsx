import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import { NormalizedAchievement } from "@/integrations/models";
import { getMostRecentAchievement } from "@/integrations/utils/getMostRecentAchievement";

import { EarningsArrow } from "../EarningsArrow";

export const MostRecentAchievementCard: VFC = () => {
  const { allGames, isLoading } = useAllGames();

  let mostRecentAchievement: NormalizedAchievement | null = null;
  if (allGames) {
    mostRecentAchievement = getMostRecentAchievement(allGames);
  }

  return (
    <BaseStatsCard
      headingLabel="Most Recent Achievement"
      isUsingAccentedBackground
    >
      <div className="flex gap-x-3">
        {isLoading === true ? (
          <p className="flex w-32 mt-1 h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg">
            &nbsp;
          </p>
        ) : (
          <>
            <p className="text-black dark:text-white flex">
              {mostRecentAchievement.name}
            </p>
            <EarningsArrow>{mostRecentAchievement.points}</EarningsArrow>
          </>
        )}
      </div>

      <div className="flex items-center gap-x-2">
        {isLoading === true ? (
          <p className="flex w-48 mt-2 mb-1 h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg">
            &nbsp;
          </p>
        ) : (
          <>
            <p className="text-black dark:text-white">
              {formatPercentage(mostRecentAchievement.earnedRate)} earn rate
            </p>
            <p className="text-sm mt-0.5 text-gray-700 dark:text-gray-300 tracking-tight">
              {capitalizeOnlyFirstLetter(mostRecentAchievement.rarity)}
            </p>
          </>
        )}
      </div>
    </BaseStatsCard>
  );
};

function capitalizeOnlyFirstLetter(input: string) {
  const allLowerCase = input.toLowerCase();

  return allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
}
