import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import { NormalizedGame } from "@/integrations/models";
import { getMostRecentGame } from "@/integrations/utils/getMostRecentGame";

import { PlatformPin } from "../PlatformPin";

export const MostRecentGameCard: VFC = () => {
  const { allGames, isLoading } = useAllGames();

  let mostRecentGame: NormalizedGame | null = null;
  if (allGames) {
    mostRecentGame = getMostRecentGame(allGames);
  }

  return (
    <BaseStatsCard headingLabel="Most Recent Game" isUsingAccentedBackground>
      <div className="flex gap-x-3">
        {isLoading === true ? (
          <p className="flex w-32 mt-1 h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg">
            &nbsp;
          </p>
        ) : (
          <>
            <p className="text-black dark:text-white flex">
              {mostRecentGame.name}
            </p>
            <PlatformPin platform={mostRecentGame.service} />
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
              {formatPercentage(
                calculateCompletionPercentage(mostRecentGame) * 100
              )}{" "}
              Completion
            </p>

            {/* This should change based on the platform.
            For PSN, achievement count. For others, points count. */}
            <p className="text-sm mt-0.5 text-gray-700 dark:text-gray-300">
              (40 of 59)
            </p>
          </>
        )}
      </div>
    </BaseStatsCard>
  );
};

const calculateCompletionPercentage = (game: NormalizedGame) => {
  let totalGamePoints = 0;
  let earnedGamePoints = 0;

  for (const achievement of game.achievements) {
    totalGamePoints += achievement.points;

    if (achievement.isEarned) {
      earnedGamePoints += achievement.points;
    }
  }

  return earnedGamePoints / totalGamePoints;
};
