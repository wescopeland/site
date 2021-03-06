import cc from "classcat";
import type { FC } from "react";

import type { GamingPlatformId } from "@/common/models";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

const gamingServiceColors = getGamingServiceColors();

interface PlatformPinProps {
  platform: GamingPlatformId;
}

export const PlatformPin: FC<PlatformPinProps> = ({ platform }) => {
  return (
    <div className="flex items-center gap-x-1">
      <div
        className={cc([
          "w-2 h-2 rounded-full",
          platform === "psn" && gamingServiceColors.playstation.classNames.dark,
          platform === "xbox" && gamingServiceColors.xbox.classNames.dark,
          platform === "ra" && gamingServiceColors.ra.classNames.dark
        ])}
      />

      <span className="text-sm tracking-tight text-black dark:text-white">
        {platform === "psn" && "PSN"}
        {platform === "xbox" && "XBOX"}
        {platform === "ra" && "RETRO"}
      </span>
    </div>
  );
};
