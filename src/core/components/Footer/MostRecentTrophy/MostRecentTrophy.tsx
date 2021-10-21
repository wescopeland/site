import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import relativeTime from "dayjs/plugin/relativeTime";
import type { VFC } from "react";
import { FaTrophy } from "react-icons/fa";

import { useBaseLayoutContext } from "@/core/layouts/BaseLayout/base-layout.context";

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const MostRecentTrophy: VFC = () => {
  const { gamingMetadata } = useBaseLayoutContext();

  if (!gamingMetadata.mostRecentTrophy) {
    return null;
  }

  const trophy = gamingMetadata.mostRecentTrophy;

  return (
    <div className="flex items-center mb-4">
      <FaTrophy className="mr-4 text-xl" style={{ color: "#5e84b0" }} />

      <div className="text-sm">
        <p className="font-semibold">Most Recent Trophy</p>
        <p>
          {trophy.trophyName} ({trophy.gameName}),{" "}
          {getFormattedDate(trophy.earnedDateTime)}
        </p>
      </div>
    </div>
  );
};

const getFormattedDate = (earnedDateTime: string) => {
  let formattedDate = "";

  const date = dayjs(earnedDateTime);

  if (date.isToday()) {
    formattedDate = "today";
  } else if (date.isYesterday()) {
    formattedDate = "yesterday";
  } else {
    formattedDate = dayjs().to(date);
  }

  return formattedDate;
};
