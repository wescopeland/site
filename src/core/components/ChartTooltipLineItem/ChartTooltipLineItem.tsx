import cc from "classcat";
import type { VFC } from "react";

interface ChartTooltipLineItemProps {
  label: string;
  value: string;

  swatchBgClassName?: string;
}

export const ChartTooltipLineItem: VFC<ChartTooltipLineItemProps> = ({
  label,
  value,
  swatchBgClassName
}) => {
  return (
    <div className="flex items-center gap-x-2">
      {swatchBgClassName ? (
        <div
          className={cc(["inline-block w-4 h-4 rounded-sm", swatchBgClassName])}
        />
      ) : null}
      <div className="flex justify-between w-full">
        <span>{label}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};
