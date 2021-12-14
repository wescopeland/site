import type { VFC } from "react";

import { Animate } from "@/core/components/Animate";
import { H1 } from "@/core/components/H1";
import { ChartDatum } from "@/gaming/models";

import { MostRecentAchievementCard } from "../MostRecentAchievementCard";
import { MostRecentCompletionCard } from "../MostRecentCompletionCard";
import { MostRecentGameCard } from "../MostRecentGameCard";
import { RarestAchievementsCard } from "../RarestAchievementsCard";
import { RarestCompletionsCard } from "../RarestCompletionsCard";
import { ServiceSummaryCardList } from "../ServiceSummaryCardList";
import { TotalPointsChartCard } from "../TotalPointsChartCard";

interface GamingRootProps {
  totalPointsChartData: ChartDatum[];
}

export const GamingRoot: VFC<GamingRootProps> = ({ totalPointsChartData }) => {
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
            <p className="text-lg font-light tracking-tight mb-2">Overview</p>

            <div className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
              <MostRecentGameCard />
              <MostRecentAchievementCard />
            </div>
          </div>

          <MostRecentCompletionCard />

          <TotalPointsChartCard data={totalPointsChartData} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
            <RarestAchievementsCard />
            <RarestCompletionsCard />
          </div>
        </div>
      </Animate.FadeUpOnMount>
    </>
  );
};
