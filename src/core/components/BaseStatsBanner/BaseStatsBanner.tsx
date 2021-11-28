import cc from "classcat";
import type { FC } from "react";

export const BaseStatsBanner: FC = ({ children }) => {
  return (
    <div
      className={cc([
        "relative flex flex-col md:flex-row md:gap-x-6",
        "w-full p-4 rounded-2xl",
        "bg-white border border-gray-100",
        "dark:border-gray-500 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-black"
      ])}
    >
      {children}
    </div>
  );
};
