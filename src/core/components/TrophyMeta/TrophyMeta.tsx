import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { VFC } from "react";
import { FaTrophy } from "react-icons/fa";

dayjs.extend(relativeTime);

export interface TrophyMetaProps {
  label: string;
  trophyName: string;
  trophyGame: string;
  trophyGrade: "bronze" | "silver" | "gold" | "platinum";
  earnedDate: string;
}

export const TrophyMeta: VFC<TrophyMetaProps> = ({
  label,
  trophyName,
  trophyGame,
  trophyGrade,
  earnedDate
}) => {
  const formattedDate = dayjs().to(dayjs(earnedDate));

  return (
    <div className="flex items-center mb-2">
      <FaTrophy className="mr-4 text-xl" style={{ color: "#5e84b0" }} />

      <div className="text-sm">
        <p>{label}</p>
        <p>
          {trophyName} ({trophyGame}), {formattedDate}
        </p>
      </div>
    </div>
  );
};
