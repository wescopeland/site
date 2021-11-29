import cc from "classcat";
import type { VFC } from "react";

interface TrophyPinProps {
  grade: "bronze" | "silver" | "gold" | "platinum" | "total";

  count?: number;
  size?: "small" | "medium" | "3xl";
}

export const TrophyPin: VFC<TrophyPinProps> = ({
  grade,
  count,
  size = "small"
}) => {
  return (
    <div className="flex items-center gap-x-1">
      <div
        className={cc([
          "w-2 h-2 rounded-full",
          grade === "platinum" && "bg-blue-300",
          grade === "gold" && "bg-yellow-400",
          grade === "silver" && "bg-gray-300",
          grade === "bronze" && "bg-yellow-900",
          grade === "total" && "bg-gray-700",
          size === "3xl" && "mr-1"
        ])}
      />

      <span
        className={cc([
          "text-black dark:text-white tracking-tight",
          size === "small" && "text-sm",
          size === "3xl" && "text-3xl"
        ])}
      >
        {count ? <>{count.toLocaleString()} </> : null}

        {grade === "platinum" && "Platinum"}
        {grade === "gold" && "Gold"}
        {grade === "silver" && "Silver"}
        {grade === "bronze" && "Bronze"}
        {grade === "total" && "Total"}
      </span>
    </div>
  );
};
