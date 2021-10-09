import type { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <footer className="container max-w-2xl px-0 mx-auto">
      <hr className="w-full mb-8 border-gray-200 border-1" />

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
