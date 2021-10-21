import { useRouter } from "next/router";
import type { VFC } from "react";

import { AppRoutes } from "@/core/utils/AppRoutes";

import { NavLink } from "./NavLink";

export const NavBar: VFC = () => {
  const { route } = useRouter();

  return (
    <div className="flex flex-col justify-center pt-2 pb-8">
      <nav className="relative flex items-center justify-between w-full py-8 text-gray-900">
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
            isActive={route === AppRoutes.TodayILearnedPage()}
          >
            TIL
          </NavLink>
        </div>

        <div>Content B</div>
      </nav>
    </div>
  );
};
