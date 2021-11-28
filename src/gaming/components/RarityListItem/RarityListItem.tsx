import type { ReactNode, VFC } from "react";

import type { PlatformId } from "@/gaming/models";

import { PlatformRibbon } from "../PlatformRibbon";

interface RarityListItemProps {
  imageSrc: string;
  lineOneContent: ReactNode;
  lineTwoContent: ReactNode;
  platform: PlatformId;
}

export const RarityListItem: VFC<RarityListItemProps> = ({
  imageSrc,
  lineOneContent,
  lineTwoContent,
  platform
}) => {
  return (
    <li className="flex py-2 text-sm">
      <div className="relative overflow-hidden w-12 h-12 min-w-[3rem] border dark:border-gray-600 border-gray-300 rounded">
        <img className="object-cover" src={imageSrc} />
        <PlatformRibbon platform={platform} />
      </div>

      <div className="ml-3 my-auto truncate">
        <p className="truncate tracking-tight">{lineOneContent}</p>

        <p className="my-auto truncate text-gray-700 dark:text-gray-300">
          {lineTwoContent}
        </p>
      </div>
    </li>
  );
};
