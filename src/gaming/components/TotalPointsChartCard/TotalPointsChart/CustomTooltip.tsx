import { Transition } from "@headlessui/react";
import cc from "classcat";
import dayjs from "dayjs";
import type { FC } from "react";

import { ChartTooltipLineItem } from "@/common/components/ChartTooltipLineItem";
import type { ChartDatum } from "@/gaming/models";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

const gamingServiceColors = getGamingServiceColors();

interface CustomTooltipProps {
  active: boolean;
  finalDataNode: ChartDatum;
  payload: Array<any & { payload: ChartDatum }>;
}

export const CustomTooltip: FC<CustomTooltipProps> = ({
  active,
  finalDataNode,
  payload
}) => {
  const [value] = payload;

  if (!value) {
    return null;
  }

  const datum = value.payload as ChartDatum;

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
            {finalDataNode.playstationPoints ? (
              <ChartTooltipLineItem
                label="PSN"
                value={
                  datum.playstationPoints
                    ? datum.playstationPoints.toLocaleString()
                    : "0"
                }
                swatchBgClassName={
                  gamingServiceColors.playstation.classNames.dark
                }
              />
            ) : null}

            {finalDataNode.xboxPoints ? (
              <ChartTooltipLineItem
                label="Xbox"
                value={
                  datum.xboxPoints ? datum.xboxPoints.toLocaleString() : "0"
                }
                swatchBgClassName={gamingServiceColors.xbox.classNames.dark}
              />
            ) : null}

            {finalDataNode.retroAchievementsPoints ? (
              <ChartTooltipLineItem
                label="RA"
                value={
                  datum.retroAchievementsPoints
                    ? datum.retroAchievementsPoints.toLocaleString()
                    : "0"
                }
                swatchBgClassName={gamingServiceColors.ra.classNames.dark}
              />
            ) : null}
          </div>

          <ChartTooltipLineItem
            label="Total"
            value={datum.totalPoints.toLocaleString()}
          />
        </div>
      </div>
    </Transition>
  );
};
