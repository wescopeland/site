import cc from "classcat";
import type { VFC } from "react";

import type { GamingPlatformId } from "@/core/models";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

const gamingServiceColors = getGamingServiceColors();

interface PlatformRibbonProps {
  platform: GamingPlatformId;
}

export const PlatformRibbon: VFC<PlatformRibbonProps> = ({ platform }) => {
  let a11yLabel = "";
  if (platform === "psn") {
    a11yLabel = "PSN";
  } else if (platform === "xbox") {
    a11yLabel = "Xbox";
  } else if (platform === "ra") {
    a11yLabel = "Retro";
  }

  return (
    <div
      aria-label={a11yLabel}
      className={cc([
        "absolute -bottom-2 -right-2 w-4 h-4",
        "transform rotate-45",
        platform === "psn" && gamingServiceColors.playstation.classNames.dark,
        platform === "xbox" && gamingServiceColors.xbox.classNames.dark,
        platform === "ra" && gamingServiceColors.ra.classNames.dark
      ])}
    />
  );
};
