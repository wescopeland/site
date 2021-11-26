import cc from "classcat";
import type { FC } from "react";
import { ImArrowUp2 } from "react-icons/im";

interface EarningsArrowProps {
  className?: string;
}

export const EarningsArrow: FC<EarningsArrowProps> = ({
  children,
  className
}) => {
  const sanitizedInput = Number(children);

  if (Number.isNaN(sanitizedInput)) {
    return null;
  }

  let arrowDirection: "up" | "down" | "neutral" = "neutral";
  if (sanitizedInput > 0) {
    arrowDirection = "up";
  } else if (sanitizedInput < 0) {
    arrowDirection = "down";
  }

  return (
    <span
      className={cc([
        "flex items-center mr-1",
        arrowDirection === "up" && "dark:text-green-400 text-green-700",
        arrowDirection === "down" && "dark:text-red-400 text-red-700",
        className
      ])}
    >
      {"("}
      <ImArrowUp2
        className={cc([
          "text-xs mr-0.5",
          arrowDirection === "down" && "transform rotate-180"
        ])}
      />
      {Math.abs(sanitizedInput).toLocaleString()}
      {" points)"}
    </span>
  );
};
