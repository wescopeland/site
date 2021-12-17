import cc from "classcat";
import type { VFC } from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

import { Animate } from "@/core/components/Animate";
import { useAllGames } from "@/gaming/hooks/useAllGames";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";
import { getUserPlatinumCount } from "@/integrations/psn/utils/getUserPlatinumCount";
import { getUserMasteryCount } from "@/integrations/ra/utils/getUserMasteryCount";
import { getUserGamerscoreCount } from "@/integrations/xbox/utils/getUserGamerscoreCount";

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

      <ServiceSummaryCard
        isLoading={isLoading}
        IconComponent={FaXbox}
        bgColorClassName={cc([
          gamingServiceColors.xbox.classNames.light,
          gamingServiceColors.xbox.classNames.mediaDark
        ])}
        labelCopy="Xbox Gamerscore"
        valueCopy={
          isLoading
            ? ""
            : `${getUserGamerscoreCount(allGames).toLocaleString()} / 100,000`
        }
        platform="xbox"
      />

      <ServiceSummaryCard
        isLoading={isLoading}
        IconComponent={MdGamepad}
        bgColorClassName={cc([
          gamingServiceColors.ra.classNames.light,
          gamingServiceColors.ra.classNames.mediaDark
        ])}
        labelCopy="RA Masteries"
        valueCopy={isLoading ? "" : `${getUserMasteryCount(allGames)} / 100`}
        platform="ra"
      />
    </Animate.StaggerOnMount>
  );
};
