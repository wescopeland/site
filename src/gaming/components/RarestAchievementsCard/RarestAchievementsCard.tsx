import type { FC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";

import { RarityListItem } from "../RarityListItem";

export const RarestAchievementsCard: FC = () => {
  const rarestAchievements = useGamingContextSelector(
    (state) => state.rarestAchievements
  );

  return (
    <BaseStatsCard headingLabel="Rarest Achievements">
      {rarestAchievements.length > 0 ? (
        <ol className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
          {rarestAchievements.map((achievement) => (
            <RarityListItem
              key={`${achievement.name}-${achievement.gameName}`}
              platform={achievement.service}
              lineOneContent={<>{achievement.name}</>}
              lineTwoContent={
                <>
                  {achievement.earnedRate ? (
                    <>
                      {formatPercentage(achievement.earnedRate)}
                      {", "}
                    </>
                  ) : null}

                  {achievement.gameName}
                </>
              }
              imageSrc={achievement.iconUrl ?? "#"}
            />
          ))}
        </ol>
      ) : (
        <div className="flex items-center justify-center h-72">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            There is no data available.
          </p>
        </div>
      )}
    </BaseStatsCard>
  );
};
