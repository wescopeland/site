import dayjs from "dayjs";
import type { VFC } from "react";

import { formatPercentage } from "@/core/utils/formatPercentage";
import type { PlatformId } from "@/gaming/models";

import { BaseStatsCard } from "../BaseStatsCard";
import { RarityListItem } from "../RarityListItem";

const rarestCompletions = [
  {
    gameName: "Retro Game Challenge | GameCenter CX: Arino no Chousenjou",
    rarityPercentage: 0.2,
    completedOn: "10-18-2020",
    platform: "ra",
    imageSrc: "/static/images/achievement.png"
  },
  {
    gameName: "GTA IV",
    rarityPercentage: 0.5,
    completedOn: "10-08-2021",
    platform: "psn",
    imageSrc: "/static/images/achievement.png"
  },
  {
    gameName: "Super Meat Boy",
    rarityPercentage: 0.62,
    platform: "xbox",
    completedOn: "03-12-2020",
    imageSrc: "/static/images/achievement.png"
  },
  {
    gameName: "Final Fantasy VII Remake",
    rarityPercentage: 0.65,
    platform: "psn",
    completedOn: "06-10-2020",
    imageSrc: "/static/images/achievement.png"
  },
  {
    gameName: "Chrono Trigger",
    rarityPercentage: 1.22,
    platform: "ra",
    completedOn: "02-21-2018",
    imageSrc: "/static/images/achievement.png"
  }
];

export const RarestCompletionsCard: VFC = () => {
  return (
    <BaseStatsCard headingLabel="Rarest Completions">
      <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
        {rarestCompletions.map((completion) => (
          <RarityListItem
            key={`${completion.gameName}-${completion.platform}`}
            platform={completion.platform as PlatformId}
            lineOneContent={<>{completion.gameName}</>}
            lineTwoContent={
              <>
                {formatPercentage(completion.rarityPercentage)}
                {", "}
                {dayjs(completion.completedOn).format("MMM DD YYYY")}
              </>
            }
            imageSrc={completion.imageSrc}
          />
        ))}
      </div>
    </BaseStatsCard>
  );
};
