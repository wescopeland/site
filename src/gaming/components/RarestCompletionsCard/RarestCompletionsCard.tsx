import dayjs from "dayjs";
import type { VFC } from "react";

import type { PlatformId } from "@/gaming/models";

import { BaseStatsCard } from "../BaseStatsCard";
import { PlatformRibbon } from "../PlatformRibbon";

export const RarestCompletionsCard: VFC = () => {
  return (
    <BaseStatsCard headingLabel="Rarest Completions">
      <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
        <RarestCompletionListing
          gameName="Retro Game Challenge | GameCenter CX: Arino no Chousenjou"
          rarityPercentage={0.2}
          platform="ra"
          completedOn={new Date("10-18-2020").toISOString()}
        />

        <RarestCompletionListing
          gameName="GTA IV"
          rarityPercentage={0.5}
          platform="psn"
          completedOn={new Date("10-08-2021").toISOString()}
        />

        <RarestCompletionListing
          gameName="Super Meat Boy"
          rarityPercentage={0.62}
          platform="xbox"
          completedOn={new Date("03-12-2020").toISOString()}
        />

        <RarestCompletionListing
          gameName="Final Fantasy VII Remake"
          rarityPercentage={0.65}
          platform="psn"
          completedOn={new Date("06-10-2020").toISOString()}
        />

        <RarestCompletionListing
          gameName="Chrono Trigger"
          rarityPercentage={1.22}
          platform="ra"
          completedOn={new Date("02-21-2018").toISOString()}
        />
      </div>
    </BaseStatsCard>
  );
};

interface RarestCompletionListingProps {
  gameName: string;
  rarityPercentage: number;
  platform: PlatformId;
  completedOn: string;
}

export const RarestCompletionListing: VFC<RarestCompletionListingProps> = ({
  gameName,
  rarityPercentage,
  platform,
  completedOn
}) => {
  return (
    <div className="flex py-2">
      <div className="relative w-12 h-12 border dark:border-gray-600 border-gray-300 rounded overflow-hidden">
        <img className="object-cover" src="/static/images/achievement2.png" />
        <PlatformRibbon platform={platform} />
      </div>

      <div className="ml-4 flex justify-center flex-col">
        <p className="tracking-tight flex gap-x-2">
          <span className="truncate max-w-[230px] sm:max-w-[270px]">
            {gameName}
          </span>
        </p>

        <p className="text-sm flex gap-x-2">
          {(rarityPercentage / 100).toLocaleString(undefined, {
            style: "percent",
            minimumFractionDigits: 2
          })}
          , {dayjs(completedOn).format("MMM DD YYYY")}
        </p>
      </div>
    </div>
  );
};
