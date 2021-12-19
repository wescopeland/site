import cc from "classcat";
import type { FC } from "react";

interface BaseChartCardProps {
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
        <p className="dark:text-gray-400 text-gray-500">{heading}</p>

        {subheading ? (
          <p className="text-2xl tracking-wider text-black dark:text-white">
            {isLoading ? (
              <span className="my-2 animate-pulse rounded bg-gray-100 dark:bg-gray-600 flex w-24 h-4">
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
