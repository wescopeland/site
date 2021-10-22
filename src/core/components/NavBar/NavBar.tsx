import cc from "classcat";
import { useRouter } from "next/router";
import type { VFC } from "react";

import { AppRoutes } from "@/core/utils/AppRoutes";

import { DarkModeToggle } from "./DarkModeToggle";
import { NavLink } from "./NavLink";

export const NavBar: VFC = () => {
  const { route } = useRouter();

  return (
    <div
      className={cc([
        "flex flex-col justify-center items-center",
        "py-2 mb-12",
        "bg-gray-100 dark:bg-gray-800",
        "transition duration-300"
      ])}
    >
      <div className="container max-w-2xl px-8 mx-auto">
        <nav className="relative flex items-center justify-between w-full py-8">
          <div className="-ml-3">
            <NavLink
              href={AppRoutes.HomePage()}
              isActive={route === AppRoutes.HomePage()}
            >
              Home
            </NavLink>

            <NavLink
              href={AppRoutes.ProjectsPage()}
              isActive={route === AppRoutes.ProjectsPage()}
            >
              Projects
            </NavLink>

            <NavLink
              href={AppRoutes.TodayILearnedPage()}
              isActive={route.includes(AppRoutes.TodayILearnedPage())}
            >
              TIL
            </NavLink>
          </div>

          <DarkModeToggle />
        </nav>
      </div>
    </div>
  );
};
