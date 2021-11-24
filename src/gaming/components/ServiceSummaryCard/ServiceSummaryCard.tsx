import cc from "classcat";
import type { VFC } from "react";
import type { IconType } from "react-icons";
import { ImArrowUpRight2 } from "react-icons/im";

interface ServiceSummaryCardProps {
  bgColorClassName: string;
  IconComponent: IconType;
  labelCopy: string;
  valueCopy: string;
}

export const ServiceSummaryCard: VFC<ServiceSummaryCardProps> = ({
  bgColorClassName,
  IconComponent,
  labelCopy,
  valueCopy
}) => {
  return (
    <div
      className={cc([
        "relative flex flex-col items-center p-4 rounded-lg border-2",
        "bg-white dark:bg-gray-900 select-none cursor-pointer",
        "border-gray-100 dark:border-gray-500",
        "hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-200",
        "group transition sm:active:scale-95"
      ])}
    >
      <ImArrowUpRight2
        className={cc([
          "absolute top-3 right-5 text-lg",
          "transition transform opacity-50",
          "group-hover:opacity-100 group-hover:translate-x-2",
          "text-black dark:text-white"
        ])}
      />

      <div
        className={cc([
          "flex items-center justify-center w-16 h-16 mb-2 rounded-full",
          bgColorClassName
        ])}
      >
        <IconComponent className="text-3xl text-gray-800 dark:text-white" />
      </div>

      <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
        {labelCopy}
      </h2>
      <p className="text-black dark:text-white">{valueCopy}</p>
    </div>
  );
};
