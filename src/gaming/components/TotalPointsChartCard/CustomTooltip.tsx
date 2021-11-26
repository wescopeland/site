import { Transition } from "@headlessui/react";
import cc from "classcat";
import type { VFC } from "react";

import type { ChartDatum } from "@/gaming/models";
import { getGamingServiceColors } from "@/gaming/utils/getGamingServiceColors";

const gamingServiceColors = getGamingServiceColors();

interface CustomTooltipProps {
  active: boolean;
  payload: Array<any & { payload: ChartDatum }>;
}

export const CustomTooltip: VFC<CustomTooltipProps> = ({ active, payload }) => {
  const [value] = payload;

  if (!value) {
    return null;
  }

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
          <p>Jan 1, 2018</p>

          <div>
            <LineItem
              label="PSN"
              value={value.payload.playstationPoints.toLocaleString()}
              swatchBgClassName={
                gamingServiceColors.playstation.classNames.dark
              }
            />

            <LineItem
              label="Xbox"
              value={value.payload.xboxPoints.toLocaleString()}
              swatchBgClassName={gamingServiceColors.xbox.classNames.dark}
            />

            <LineItem
              label="RA"
              value={value.payload.retroAchievementsPoints.toLocaleString()}
              swatchBgClassName={gamingServiceColors.ra.classNames.dark}
            />
          </div>

          <LineItem
            label="Total"
            value={value.payload.totalPoints.toLocaleString()}
          />
        </div>
      </div>
    </Transition>
  );
};

interface LineItemProps {
  label: string;
  value: string;

  swatchBgClassName?: string;
}

export const LineItem: VFC<LineItemProps> = ({
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
