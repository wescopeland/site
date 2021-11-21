import type { VFC } from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";

import { NavBar } from "@/core/components/NavBar";

import { AppBarButton } from "./AppBarButton";
import { DarkModeToggle } from "./DarkModeToggle";

export const AppBar: VFC = () => {
  return (
    <div className="flex w-full justify-between items-center z-50 p-4">
      <div className="flex items-center">
        <span className="min-w-[48px]">WC</span>
        <NavBar />
      </div>

      <div>
        <div className="flex gap-x-2">
          <AppBarButton
            as="a"
            href="https://github.com/wescopeland"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </AppBarButton>

          <AppBarButton
            as="a"
            href="https://twitter.com/wescopeland_"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </AppBarButton>

          <span suppressHydrationWarning>
            <DarkModeToggle />
          </span>
        </div>
      </div>
    </div>
  );
};
