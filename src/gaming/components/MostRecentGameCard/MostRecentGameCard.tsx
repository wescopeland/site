import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";
import { NormalizedGame } from "@/integrations/models";

import { PlatformPin } from "../PlatformPin";

export const MostRecentGameCard: VFC = () => {
  const mostRecentGame = useGamingContextSelector(
    (state) => state.mostRecentGame
  );

  const {
    completionPercentage,
    totalAchievementCount,
    earnedAchievementCount
  } = calculateGameEarningsStatus(mostRecentGame);

  return (
    <BaseStatsCard headingLabel="Most Recent Game" isUsingAccentedBackground>
      <div className="flex gap-x-3">
        <>
          <p className="text-black dark:text-white flex">
            {mostRecentGame.name}
          </p>
          <PlatformPin platform={mostRecentGame.service} />
        </>
      </div>

      <div className="flex items-center gap-x-2">
        <>
          <p className="text-black dark:text-white">
            {formatPercentage(completionPercentage * 100)} Completion
          </p>

          {/* This should change based on the platform.
            For PSN, achievement count. For others, points count. */}
          <p className="text-sm mt-0.5 text-gray-700 dark:text-gray-300">
            ({earnedAchievementCount} of {totalAchievementCount})
          </p>
        </>
      </div>
    </BaseStatsCard>
  );
};

const calculateGameEarningsStatus = (game: NormalizedGame) => {
  let totalAchievementCount = 0;
  let totalGamePoints = 0;

  let earnedAchievementCount = 0;
  let earnedGamePoints = 0;

  for (const achievement of game.achievements) {
    totalAchievementCount += 1;
    totalGamePoints += achievement.points;

    if (achievement.isEarned) {
      earnedAchievementCount += 1;
      earnedGamePoints += achievement.earnedPoints;
    }
  }

  return {
    totalAchievementCount,
    earnedAchievementCount,
    completionPercentage: earnedGamePoints / totalGamePoints
  };
};
