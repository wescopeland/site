import dayjs from "dayjs";
import type { VFC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";
import { formatPercentage } from "@/core/utils/formatPercentage";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";

import { RarityListItem } from "../RarityListItem";

export const RarestCompletionsCard: VFC = () => {
  const rarestCompletions = useGamingContextSelector(
    (state) => state.rarestCompletions
  );

  return (
    <BaseStatsCard headingLabel="Rarest Completions">
      {rarestCompletions.length > 0 ? (
        <ol className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
          {rarestCompletions.map((completion) => (
            <RarityListItem
              key={`${completion.name}-${completion.platform}`}
              platform={completion.service}
              lineOneContent={<>{completion.name}</>}
              lineTwoContent={
                <>
                  {completion.completionRate ? (
                    <>
                      {formatPercentage(completion.completionRate)}
                      {", "}
                    </>
                  ) : null}

                  {dayjs(completion.completedOn).format("MMM DD YYYY")}
                </>
              }
              isUsingWideImage={true}
              imageSrc={completion.iconUrl ?? "#"}
            />
          ))}
        </ol>
      ) : (
        <div className="h-72 flex items-center justify-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            There is no data available.
          </p>
        </div>
      )}
    </BaseStatsCard>
  );
};
