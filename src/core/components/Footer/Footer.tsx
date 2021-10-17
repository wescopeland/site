import type { VFC } from "react";
import { FaTrophy } from "react-icons/fa";
import { TrophyMeta } from "../TrophyMeta";
import { useBaseLayoutContext } from "@/core/layouts/BaseLayout/base-layout.context";

export const Footer: VFC = () => {
  const { mostRecentTrophy } = useBaseLayoutContext();

  return (
    <footer className="container max-w-2xl px-0 mx-auto">
      <hr className="w-full mb-8 border-gray-200 border-1" />

      <TrophyMeta
        label="Most Recent Trophy"
        trophyName={mostRecentTrophy.trophyName}
        trophyGame={mostRecentTrophy.trophyGame}
        trophyGrade={mostRecentTrophy.trophyGrade}
        earnedDate={mostRecentTrophy.earnedDate}
      />

      <p className="flex justify-between text-sm">
        <span>
          <span className="font-bold">Wes Copeland</span> © 2021 &ndash; Present
        </span>

        <span>
          <span>
            Made with <span className="text-xs">❤️</span>&nbsp; in Boston, MA
          </span>
        </span>
      </p>
    </footer>
  );
};
