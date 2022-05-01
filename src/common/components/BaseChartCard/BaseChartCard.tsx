import cc from "classcat";
import type { FC, ReactNode } from "react";

interface BaseChartCardProps {
  children?: ReactNode;
  heading: string;

  isLoading?: boolean;
  subheading?: string;
}

export const BaseChartCard: FC<BaseChartCardProps> = ({
  children,
  heading,
  isLoading,
  subheading
}) => {
  return (
    <div
      className={cc([
        "flex flex-col w-full pt-4 px-4 sm:px-8 pb-8 min-h-[360px] rounded-lg",
        "bg-white border border-gray-100",
        "dark:border-gray-500 dark:bg-gray-900"
      ])}
    >
      <div className="sm:-ml-4">
        <p className="text-gray-500 dark:text-gray-400">{heading}</p>

        {subheading ? (
          <p className="text-2xl tracking-wider text-black dark:text-white">
            {isLoading ? (
              <span className="flex w-24 h-4 my-2 bg-gray-100 rounded animate-pulse dark:bg-gray-600">
                &nbsp;
              </span>
            ) : (
              <>{subheading}</>
            )}
          </p>
        ) : null}
      </div>

      {children}
    </div>
  );
};
