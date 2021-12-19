import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";

import { RarityListItem } from "../RarityListItem";

export const RarestAchievementsCard: VFC = () => {
  const rarestAchievements = useGamingContextSelector(
    (state) => state.rarestAchievements
  );

  return (
    <BaseStatsCard headingLabel="Rarest Achievements">
      <ol className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
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
      </ol>
    </BaseStatsCard>
  );
};
