/* eslint-disable sonarjs/no-duplicate-string */

import dayjs from "dayjs";
import type { VFC } from "react";
import urlcat from "urlcat";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import { NormalizedGame } from "@/integrations/models";
import { findRarestCompletions } from "@/integrations/utils/findRarestCompletions";

import { RarityListItem } from "../RarityListItem";

export const RarestCompletionsCard: VFC = () => {
  const { allGames, isLoading } = useAllGames();

  let rarestCompletions: NormalizedGame[] | null = null;
  if (allGames) {
    rarestCompletions = findRarestCompletions(allGames, 5);
  }

  return (
    <BaseStatsCard headingLabel="Rarest Completions">
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
            {rarestCompletions.map((completion) => (
              <RarityListItem
                key={`${completion.name}-${completion.platform}`}
                platform={completion.service}
                lineOneContent={<>{completion.name}</>}
                lineTwoContent={
                  <>
                    {formatPercentage(completion.completionRate)}
                    {", "}
                    {dayjs(completion.completedOn).format("MMM DD YYYY")}
                  </>
                }
                isUsingWideImage={true}
                imageSrc={completion.iconUrl}
              />
            ))}
          </>
        )}
      </ol>
    </BaseStatsCard>
  );
};
