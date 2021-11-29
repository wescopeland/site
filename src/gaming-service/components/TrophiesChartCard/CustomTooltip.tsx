import { Transition } from "@headlessui/react";
import cc from "classcat";
import dayjs from "dayjs";
import type { VFC } from "react";

import { ChartTooltipLineItem } from "@/core/components/ChartTooltipLineItem";
import { getPsnTrophyColors } from "@/gaming-service/utils/getPsnTrophyColors";

import type { ChartDatumWithCounts } from "./chart-datum-with-counts.model";

const psnTrophyColors = getPsnTrophyColors();

const platinumClassName = psnTrophyColors.platinum.className;
const goldClassName = psnTrophyColors.gold.className;
const silverClassName = psnTrophyColors.silver.className;
const bronzeClassName = psnTrophyColors.bronze.className;

interface CustomTooltipProps {
  active: boolean;
  payload: Array<any & { payload: ChartDatumWithCounts }>;
}

export const CustomTooltip: VFC<CustomTooltipProps> = ({ active, payload }) => {
  const [value] = payload;

  if (!value) {
    return null;
  }

  const datum = value.payload as ChartDatumWithCounts;

  return (
    <Transition
      show={active}
      enter="ease-out transition duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in transition duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={cc([
          "p-4 min-w-[180px] rounded-lg border-2",
          "bg-white dark:bg-gray-900 border-gray-500"
        ])}
      >
        <div className="flex flex-col gap-y-2">
          <p>{dayjs(datum.date).format("MMM DD, YYYY")}</p>

          <div>
            <ChartTooltipLineItem
              label="Platinum"
              value={datum.platinumCount.toLocaleString()}
              swatchBgClassName={platinumClassName}
            />

            <ChartTooltipLineItem
              label="Gold"
              value={datum.goldCount.toLocaleString()}
              swatchBgClassName={goldClassName}
            />

            <ChartTooltipLineItem
              label="Silver"
              value={datum.silverCount.toLocaleString()}
              swatchBgClassName={silverClassName}
            />

            <ChartTooltipLineItem
              label="Bronze"
              value={datum.bronzeCount.toLocaleString()}
              swatchBgClassName={bronzeClassName}
            />
          </div>

          <ChartTooltipLineItem
            label="Total"
            value={(
              datum.platinumCount +
              datum.goldCount +
              datum.silverCount +
              datum.bronzeCount
            ).toLocaleString()}
          />
        </div>
      </div>
    </Transition>
  );
};
