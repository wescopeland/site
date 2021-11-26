/* eslint-disable sonarjs/no-duplicate-string */
import type { VFC } from "react";

import { formatPercentage } from "@/core/utils/formatPercentage";
import type { PlatformId } from "@/gaming/models";

import { BaseStatsCard } from "../BaseStatsCard";
import { RarityListItem } from "../RarityListItem";

const rarestAchievements = [
  {
    achievementName: "Taking a Liberty",
    rarityPercentage: 0.93,
    gameName: "Grand Theft Auto IV",
    platform: "psn",
    imageSrc: "/static/images/achievement2.png"
  },
  {
    achievementName: "Taking a Liberty",
    rarityPercentage: 0.93,
    gameName: "Grand Theft Auto IV",
    platform: "xbox",
    imageSrc: "/static/images/achievement2.png"
  },
  {
    achievementName: "Some Achievement Name",
    rarityPercentage: 2.5,
    gameName: "Super Mario Bros.",
    platform: "ra",
    imageSrc: "/static/images/achievement2.png"
  },
  {
    achievementName: "Legend of the West",
    rarityPercentage: 2.62,
    gameName: "Red Dead Redemption",
    platform: "psn",
    imageSrc: "/static/images/achievement2.png"
  },
  {
    achievementName: "Another Achievement",
    rarityPercentage: 2.7,
    gameName: "Another Random Game",
    platform: "psn",
    imageSrc: "/static/images/achievement2.png"
  }
];

export const RarestAchievementsCard: VFC = () => {
  return (
    <BaseStatsCard headingLabel="Rarest Achievements">
      <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
        {rarestAchievements.map((achievement) => (
          <RarityListItem
            key={`${achievement.achievementName}-${achievement.gameName}`}
            platform={achievement.platform as PlatformId}
            lineOneContent={<>{achievement.achievementName}</>}
            lineTwoContent={
              <>
                {formatPercentage(achievement.rarityPercentage)}
                {", "}
                {achievement.gameName}
              </>
            }
            imageSrc={achievement.imageSrc}
          />
        ))}
      </div>
    </BaseStatsCard>
  );
};
