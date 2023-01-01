import cc from "classcat";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import type { IconType } from "react-icons";
import { ImArrowUpRight2 } from "react-icons/im";

import type { GamingPlatformId } from "@/common/models";
import { AppRoutes } from "@/common/utils/AppRoutes";

interface ServiceSummaryCardProps {
  bgColorClassName: string;
  IconComponent: IconType;
  labelCopy: string;
  platform: GamingPlatformId;
  valueCopy: string;

  isDisabled?: boolean;
}

export const ServiceSummaryCard: FC<ServiceSummaryCardProps> = ({
  bgColorClassName,
  IconComponent,
  labelCopy,
  valueCopy,
  platform,
  isDisabled
}) => {
  const ContainerComponent = isDisabled ? "div" : "a";

  const activeClassNames = [
    "select-none cursor-pointer",
    "hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-200",
    "sm:active:scale-95"
  ].join(" ");

  return (
    <LinkWrapper isDisabled={isDisabled ?? false} platformId={platform}>
      <ContainerComponent
        className={cc([
          "relative flex flex-row md:flex-col items-center gap-x-4 p-4 rounded-lg border-2",
          "bg-white dark:bg-gray-900",
          "border-gray-100 dark:border-gray-500",
          isDisabled !== true && activeClassNames,
          "group transition hover:no-underline"
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
            bgColorClassName
          ])}
        >
          <IconComponent className="text-3xl text-gray-800 dark:text-white" />
        </div>

        <div className="md:flex md:flex-col md:items-center">
          <>
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {labelCopy}
            </h2>
            <p className="text-black dark:text-white">{valueCopy}</p>
          </>
        </div>
      </ContainerComponent>
    </LinkWrapper>
  );
};

interface LinkWrapperProps {
  children: ReactNode;
  isDisabled: boolean;
  platformId: GamingPlatformId;
}

const LinkWrapper: FC<LinkWrapperProps> = ({
  isDisabled,
  platformId,
  children
}) => {
  if (isDisabled) {
    return <>{children}</>;
  }

  return (
    <Link
      legacyBehavior
      href={AppRoutes.GamingPlatformPage({ platformId })}
      passHref
    >
      {children}
    </Link>
  );
};
