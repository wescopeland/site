import cc from "classcat";
import Link from "next/link";
import type { VFC } from "react";
import type { IconType } from "react-icons";
import { ImArrowUpRight2 } from "react-icons/im";

import type { GamingPlatformId } from "@/core/models";
import { AppRoutes } from "@/core/utils/AppRoutes";

interface ServiceSummaryCardProps {
  bgColorClassName: string;
  IconComponent: IconType;
  labelCopy: string;
  platform: GamingPlatformId;
  valueCopy: string;

  isLoading?: boolean;
}

export const ServiceSummaryCard: VFC<ServiceSummaryCardProps> = ({
  bgColorClassName,
  IconComponent,
  labelCopy,
  valueCopy,
  platform,
  isLoading
}) => {
  const isDisabled = isLoading === true;

  return (
    <Link
      href={AppRoutes.GamingPlatformPage({ platformId: platform })}
      passHref
    >
      <a
        className={cc([
          "relative flex flex-row md:flex-col items-center gap-x-4 p-4 rounded-lg border-2",
          "bg-white dark:bg-gray-900 select-none cursor-pointer",
          "border-gray-100 dark:border-gray-500",
          "hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-200",
          "group transition sm:active:scale-95 hover:no-underline"
        ])}
      >
        {isDisabled !== true ? (
          <ImArrowUpRight2
            className={cc([
              "absolute top-3 right-5 text-lg",
              "transition transform opacity-50",
              "group-hover:opacity-100 group-hover:translate-x-2",
              "text-black dark:text-white"
            ])}
          />
        ) : null}

        <div
          className={cc([
            "flex items-center justify-center w-12 h-12 md:mb-2 rounded-full",
            "md:w-16 md:h-16",
            isLoading === true
              ? "animate-pulse bg-gray-200 dark:bg-gray-600"
              : bgColorClassName
          ])}
        >
          {isLoading !== true ? (
            <IconComponent className="text-3xl text-gray-800 dark:text-white" />
          ) : null}
        </div>

        <div className="md:flex md:flex-col md:items-center">
          {isLoading === true ? (
            <div className="animate-pulse flex flex-col md:items-center">
              <h2 className="text-sm w-32 mb-1">
                <span className="bg-gray-200 dark:bg-gray-600 rounded flex">
                  &nbsp;
                </span>
              </h2>
              <p className="w-16 text-sm">
                <span className="bg-gray-200 dark:bg-gray-600 rounded flex">
                  &nbsp;
                </span>
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {labelCopy}
              </h2>
              <p className="text-black dark:text-white">{valueCopy}</p>
            </>
          )}
        </div>
      </a>
    </Link>
  );
};
