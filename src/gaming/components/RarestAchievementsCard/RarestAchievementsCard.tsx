import type { VFC } from "react";

import type { PlatformId } from "@/gaming/models";

import { BaseStatsCard } from "../BaseStatsCard";
import { PlatformRibbon } from "../PlatformRibbon";

export const RarestAchievementsCard: VFC = () => {
  return (
    <BaseStatsCard headingLabel="Rarest Achievements">
      <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
        <RarestAchievementListing
          achievementName="Taking a Liberty"
          rarityPercentage={0.93}
          gameName="Grand Theft Auto IV"
          platform="psn"
        />

        <RarestAchievementListing
          achievementName="Taking a Liberty"
          rarityPercentage={0.93}
          gameName="Grand Theft Auto IV"
          platform="xbox"
        />

        <RarestAchievementListing
          achievementName="Some Achievement Name"
          rarityPercentage={2.5}
          gameName="Super Mario Bros."
          platform="ra"
        />

        <RarestAchievementListing
          achievementName="Legend of the West"
          rarityPercentage={2.62}
          gameName="Red Dead Redemption"
          platform="psn"
        />

        <RarestAchievementListing
          achievementName="Another Achievement"
          rarityPercentage={3.1}
          gameName="Another Random Game"
          platform="xbox"
        />
      </div>
    </BaseStatsCard>
  );
};

interface RarestAchievementListingProps {
  achievementName: string;
  gameName: string;
  rarityPercentage: number;
  platform: PlatformId;
}

const RarestAchievementListing: VFC<RarestAchievementListingProps> = ({
  achievementName,
  gameName,
  rarityPercentage,
  platform
}) => {
  return (
    <div className="flex py-2">
      <div className="relative overflow-hidden w-12 h-12 border dark:border-gray-600 border-gray-300 rounded">
        <img className="object-cover" src="/static/images/achievement.png" />
        <PlatformRibbon platform={platform} />
      </div>

      <div className="ml-4 flex justify-center flex-col">
        <p className="tracking-tight truncate max-w-[230px] sm:max-w-[270px]">
          {(rarityPercentage / 100).toLocaleString(undefined, {
            style: "percent",
            minimumFractionDigits: 2
          })}
          , {achievementName}
        </p>

        <p className="text-sm flex gap-x-2">
          <span className="truncate max-w-[230px] sm:max-w-[270px]">
            {gameName}
          </span>
        </p>
      </div>
    </div>
  );
};
