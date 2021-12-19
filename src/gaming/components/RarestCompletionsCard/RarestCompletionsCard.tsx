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
      <ol className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
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
      </ol>
    </BaseStatsCard>
  );
};
