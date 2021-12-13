import cc from "classcat";
import type { VFC } from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

import { Animate } from "@/core/components/Animate";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";
import { getUserPlatinumCount } from "@/integrations/psn/utils/getUserPlatinumCount";

import { ServiceSummaryCard } from "./ServiceSummaryCard";

const gamingServiceColors = getGamingServiceColors();

export const ServiceSummaryCardList: VFC = () => {
  const { allGames, isLoading } = useAllGames();

  return (
    <Animate.StaggerOnMount delay={100}>
      <ServiceSummaryCard
        isLoading={isLoading}
        IconComponent={FaPlaystation}
        bgColorClassName={cc([
          gamingServiceColors.playstation.classNames.light,
          gamingServiceColors.playstation.classNames.mediaDark
        ])}
        labelCopy="PSN Platinums"
        valueCopy={isLoading ? "" : `${getUserPlatinumCount(allGames)} / 100`}
        platform="psn"
      />

      {/* <ServiceSummaryCard
        IconComponent={FaXbox}
        bgColorClassName={cc([
          gamingServiceColors.xbox.classNames.light,
          gamingServiceColors.xbox.classNames.mediaDark
        ])}
        labelCopy="Xbox Gamerscore"
        valueCopy="6,950 / 100,000"
        platform="xbox"
      />

      <ServiceSummaryCard
        IconComponent={MdGamepad}
        bgColorClassName={cc([
          gamingServiceColors.ra.classNames.light,
          gamingServiceColors.ra.classNames.mediaDark
        ])}
        labelCopy="RA Masteries"
        valueCopy="7 / 100"
        platform="ra"
      /> */}
    </Animate.StaggerOnMount>
  );
};
