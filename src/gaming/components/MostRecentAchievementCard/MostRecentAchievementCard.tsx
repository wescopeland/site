import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";

import { EarningsArrow } from "../EarningsArrow";

export const MostRecentAchievementCard: VFC = () => {
  const mostRecentAchievement = useGamingContextSelector(
    (state) => state.mostRecentAchievement
  );

  if (mostRecentAchievement === null) {
    return null;
  }

  return (
    <BaseStatsCard
      headingLabel="Most Recent Achievement"
      isUsingAccentedBackground
    >
      <div className="flex gap-x-3">
        <>
          <p className="text-black dark:text-white flex">
            {mostRecentAchievement.name}
          </p>
          <EarningsArrow>{mostRecentAchievement.earnedPoints}</EarningsArrow>
        </>
      </div>

      <div className="flex items-center gap-x-2">
        <>
          <p className="text-black dark:text-white">
            {mostRecentAchievement.earnedRate
              ? formatPercentage(mostRecentAchievement.earnedRate)
              : "Unknown"}{" "}
            earn rate
          </p>

          {mostRecentAchievement.rarity && (
            <p className="text-sm mt-0.5 text-gray-700 dark:text-gray-300 tracking-tight">
              {capitalizeOnlyFirstLetter(mostRecentAchievement.rarity)}
            </p>
          )}
        </>
      </div>
    </BaseStatsCard>
  );
};

function capitalizeOnlyFirstLetter(input: string) {
  const allLowerCase = input.toLowerCase();

  return allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
}
