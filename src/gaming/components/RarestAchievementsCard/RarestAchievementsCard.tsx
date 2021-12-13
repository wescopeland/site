/* eslint-disable sonarjs/no-duplicate-string */
import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import type { NormalizedAchievement } from "@/integrations/models";
import { findRarestAchievements } from "@/integrations/utils/findRarestAchievements";

import { RarityListItem } from "../RarityListItem";

export const RarestAchievementsCard: VFC = () => {
  const { allGames, isLoading } = useAllGames();

  let rarestAchievements: NormalizedAchievement[] | null = null;
  if (allGames) {
    rarestAchievements = findRarestAchievements(allGames, 5);
  }

  return (
    <BaseStatsCard headingLabel="Rarest Achievements">
      <ol className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
        {isLoading ? (
          <>
            <RarityListItem isLoading />
            <RarityListItem isLoading />
            <RarityListItem isLoading />
            <RarityListItem isLoading />
            <RarityListItem isLoading />
          </>
        ) : (
          <>
            {rarestAchievements.map((achievement) => (
              <RarityListItem
                key={`${achievement.name}-${achievement.gameName}`}
                platform={achievement.service}
                lineOneContent={<>{achievement.name}</>}
                lineTwoContent={
                  <>
                    {formatPercentage(achievement.earnedRate)}
                    {", "}
                    {achievement.gameName}
                  </>
                }
                imageSrc={achievement.iconUrl}
              />
            ))}
          </>
        )}
      </ol>
    </BaseStatsCard>
  );
};
