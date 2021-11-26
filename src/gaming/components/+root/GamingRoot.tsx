import cc from "classcat";
import type { VFC } from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

import { Animate } from "@/core/components/Animate";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

import { MostRecentAchievementCard } from "../MostRecentAchievementCard";
import { MostRecentCompletionCard } from "../MostRecentCompletionCard";
import { MostRecentGameCard } from "../MostRecentGameCard";
import { RarestAchievementsCard } from "../RarestAchievementsCard";
import { RarestCompletionsCard } from "../RarestCompletionsCard";
import { ServiceSummaryCard } from "../ServiceSummaryCard";
import { TotalPointsChartCard } from "../TotalPointsChartCard";

const gamingServiceColors = getGamingServiceColors();

export const GamingRoot: VFC = () => {
  return (
    <>
      <Animate.FadeUp shouldAnimateOnMount>
        <div className="mb-10">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">Gaming</h1>
        </div>
      </Animate.FadeUp>

      <div className="grid gap-2 mb-8 md:grid-cols-3">
        <Animate.Stagger shouldAnimateOnMount delay={100}>
          <ServiceSummaryCard
            IconComponent={FaPlaystation}
            bgColorClassName={cc([
              gamingServiceColors.playstation.classNames.light,
              gamingServiceColors.playstation.classNames.mediaDark
            ])}
            labelCopy="PSN Platinums"
            valueCopy="18 / 100"
          />

          <ServiceSummaryCard
            IconComponent={FaXbox}
            bgColorClassName={cc([
              gamingServiceColors.xbox.classNames.light,
              gamingServiceColors.xbox.classNames.mediaDark
            ])}
            labelCopy="Xbox Gamerscore"
            valueCopy="6,950 / 100,000"
          />

          <ServiceSummaryCard
            IconComponent={MdGamepad}
            bgColorClassName={cc([
              gamingServiceColors.ra.classNames.light,
              gamingServiceColors.ra.classNames.mediaDark
            ])}
            labelCopy="RA Masteries"
            valueCopy="7 / 100"
          />
        </Animate.Stagger>
      </div>

      <Animate.FadeUp shouldAnimateOnMount delay={300}>
        <div className="space-y-4">
          <div>
            <p className="text-lg font-light tracking-tight mb-2">Overview</p>

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
      </Animate.FadeUp>
    </>
  );
};
