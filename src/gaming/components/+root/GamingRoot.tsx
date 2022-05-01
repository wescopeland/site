import type { FC } from "react";

import { Animate } from "@/common/components/Animate";
import { H1 } from "@/common/components/H1";

import { MostRecentAchievementCard } from "../MostRecentAchievementCard";
import { MostRecentCompletionCard } from "../MostRecentCompletionCard";
import { MostRecentGameCard } from "../MostRecentGameCard";
import { RarestAchievementsCard } from "../RarestAchievementsCard";
import { RarestCompletionsCard } from "../RarestCompletionsCard";
import { ServiceSummaryCardList } from "../ServiceSummaryCardList";
import { TotalPointsChartCard } from "../TotalPointsChartCard";

export const GamingRoot: FC = () => {
  return (
    <>
      <Animate.FadeUpOnMount>
        <H1>Gaming</H1>
      </Animate.FadeUpOnMount>

      <div className="grid gap-2 mb-8 md:grid-cols-3">
        <ServiceSummaryCardList />
      </div>

      <Animate.FadeUpOnMount delay={300}>
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-lg font-light tracking-tight">Overview</p>

            <div className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
              <MostRecentGameCard />
              <MostRecentAchievementCard />
            </div>
          </div>

          <MostRecentCompletionCard />

          <TotalPointsChartCard />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
            <RarestAchievementsCard />
            <RarestCompletionsCard />
          </div>
        </div>
      </Animate.FadeUpOnMount>
    </>
  );
};
