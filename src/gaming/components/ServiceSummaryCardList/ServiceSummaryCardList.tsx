import cc from "classcat";
import type { VFC } from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

import { Animate } from "@/core/components/Animate";
import { useGamingContextSelector } from "@/gaming/state/gaming.context";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

import { ServiceSummaryCard } from "./ServiceSummaryCard";

const gamingServiceColors = getGamingServiceColors();

export const ServiceSummaryCardList: VFC = () => {
  const [platinumCount, gamerscoreCount, masteryCount] =
    useGamingContextSelector((state) => [
      state.serviceSummaries.platinumCount,
      state.serviceSummaries.gamerscoreCount,
      state.serviceSummaries.masteryCount
    ]);

  return (
    <Animate.StaggerOnMount delay={100}>
      <ServiceSummaryCard
        isDisabled
        IconComponent={FaPlaystation}
        bgColorClassName={cc([
          gamingServiceColors.playstation.classNames.light,
          gamingServiceColors.playstation.classNames.mediaDark
        ])}
        labelCopy="PSN Platinums"
        valueCopy={`${platinumCount} / 100`}
        platform="psn"
      />

      <ServiceSummaryCard
        isDisabled
        IconComponent={FaXbox}
        bgColorClassName={cc([
          gamingServiceColors.xbox.classNames.light,
          gamingServiceColors.xbox.classNames.mediaDark
        ])}
        labelCopy="Xbox Gamerscore"
        valueCopy={`${gamerscoreCount.toLocaleString()} / 100,000`}
        platform="xbox"
      />

      <ServiceSummaryCard
        isDisabled
        IconComponent={MdGamepad}
        bgColorClassName={cc([
          gamingServiceColors.ra.classNames.light,
          gamingServiceColors.ra.classNames.mediaDark
        ])}
        labelCopy="RA Masteries"
        valueCopy={`${masteryCount} / 100`}
        platform="ra"
      />
    </Animate.StaggerOnMount>
  );
};
