import cc from "classcat";
import type { VFC } from "react";

import { Animate } from "@/core/components/Animate";
import { H1 } from "@/core/components/H1";

import { CompletionsSummaryCard } from "../CompletionsSummaryCard";
import { EarningsSummaryCard } from "../EarningsSummaryCard";
import { MostRecentAchievementBanner } from "../MostRecentAchievementBanner";

export const GamingServiceRoot: VFC = () => {
  return (
    <>
      <Animate.FadeUp shouldAnimateOnMount>
        <H1>PlayStation Network</H1>
      </Animate.FadeUp>

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-2 sm:mb-4 md:mb-8">
        <Animate.Stagger shouldAnimateOnMount delay={100}>
          <EarningsSummaryCard />
          <CompletionsSummaryCard />
        </Animate.Stagger>
      </div>

      <Animate.FadeUp shouldAnimateOnMount delay={300}>
        <MostRecentAchievementBanner />
      </Animate.FadeUp>
    </>
  );
};
