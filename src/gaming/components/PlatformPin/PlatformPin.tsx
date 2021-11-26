import cc from "classcat";
import type { VFC } from "react";

import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

const gamingServiceColors = getGamingServiceColors();

interface PlatformPinProps {
  platform: "psn" | "xbox" | "ra";
}

export const PlatformPin: VFC<PlatformPinProps> = ({ platform }) => {
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

      <span className="text-black dark:text-white tracking-tight text-sm">
        {platform === "psn" && "PSN"}
        {platform === "xbox" && "XBOX"}
        {platform === "ra" && "RETRO"}
      </span>
    </div>
  );
};
