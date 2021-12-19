import cc from "classcat";
import Image from "next/image";
import type { ReactNode, VFC } from "react";

import type { GamingPlatformId } from "@/core/models";

import { PlatformRibbon } from "../PlatformRibbon";

interface RarityListItemProps {
  platform: GamingPlatformId;

  imageSrc?: string;
  lineOneContent?: ReactNode;
  lineTwoContent?: ReactNode;
  isUsingWideImage?: boolean;
}

export const RarityListItem: VFC<RarityListItemProps> = ({
  imageSrc,
  lineOneContent,
  lineTwoContent,
  platform,
  isUsingWideImage
}) => {
  return (
    <li className="flex py-2 text-sm">
      <div
        className={cc([
          "relative overflow-hidden h-12 min-w-[3rem]",
          "border dark:border-gray-600 border-gray-300",
          "rounded",
          isUsingWideImage ? "w-20" : "w-12"
        ])}
      >
        <>
          {imageSrc ? (
            <Image
              src={imageSrc}
              objectFit="cover"
              objectPosition="center center"
              width={isUsingWideImage ? 106 : 52}
              height={isUsingWideImage ? 64 : 52}
              className="bg-gray-900"
            />
          ) : (
            <div className="bg-gray-900 w-full h-full" />
          )}

          <PlatformRibbon platform={platform} />
        </>
      </div>

      <div className="ml-3 my-auto truncate">
        <>
          <p className="truncate tracking-tight">{lineOneContent}</p>
          <p className="my-auto truncate text-gray-700 dark:text-gray-300">
            {lineTwoContent}
          </p>
        </>
      </div>
    </li>
  );
};
