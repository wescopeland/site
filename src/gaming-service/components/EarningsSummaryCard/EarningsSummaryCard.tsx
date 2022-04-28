import type { FC } from "react";

import { BaseStatsCard } from "@/core/components/BaseStatsCard";

import { TrophyPin } from "../TrophyPin";

export const EarningsSummaryCard: FC = () => {
  return (
    <BaseStatsCard headingLabel="Earnings" isUsingAccentedBackground>
      <div className="flex">
        <TrophyPin grade="platinum" count={18} size="3xl" />
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        <TrophyPin grade="gold" count={88} size="medium" />
        <TrophyPin grade="silver" count={225} size="medium" />
        <TrophyPin grade="bronze" count={693} size="medium" />
        <TrophyPin grade="total" count={1038} size="medium" />
      </div>
    </BaseStatsCard>
  );
};
