import type { VFC } from "react";

import { MostRecentTrophy } from "./MostRecentTrophy";

export const Footer: VFC = () => {
  return (
    <footer className="container max-w-2xl px-0 mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1" />

      <MostRecentTrophy />

      <p className="flex flex-col justify-between text-sm sm:flex-row">
        <span>
          <span className="font-bold">Wes Copeland</span> © 2021 &ndash; Present
        </span>

        <span>
          <span>
            Made with <span className="text-xs">❤️</span>
            <span className="hidden sm:inline">&nbsp;</span> in Boston
          </span>
        </span>
      </p>
    </footer>
  );
};
