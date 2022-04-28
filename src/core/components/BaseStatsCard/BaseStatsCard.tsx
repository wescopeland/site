import cc from "classcat";
import type { FC, ReactNode } from "react";

interface BaseStatsCardProps {
  children?: ReactNode;
  headingLabel?: string;
  isUsingAccentedBackground?: boolean;
}

export const BaseStatsCard: FC<BaseStatsCardProps> = ({
  children,
  headingLabel,
  isUsingAccentedBackground
}) => {
  return (
    <div
      className={cc([
        "w-full p-4 rounded-2xl",
        "bg-white border border-gray-100",
        "dark:border-gray-500",
        isUsingAccentedBackground
          ? "dark:bg-gradient-to-tl dark:from-gray-900 dark:to-black"
          : "dark:bg-gray-900 dark:bg-opacity-20"
      ])}
    >
      <div className="flex items-center justify-between">
        {headingLabel ? (
          <p className="text-gray-500 dark:text-gray-400">{headingLabel}</p>
        ) : null}
      </div>

      {children}
    </div>
  );
};
