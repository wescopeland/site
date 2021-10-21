import type { VFC } from "react";

import { AppRoutes } from "@/core/utils/AppRoutes";

import { NavLink } from "./NavLink";

export const NavBar: VFC = () => {
  return (
    <div className="flex flex-col justify-center pt-2 pb-8">
      <nav className="relative flex items-center justify-between w-full max-w-2xl py-8 mx-auto text-gray-900">
        <div className="-ml-3">
          <NavLink href={AppRoutes.HomePage()} isActive={true}>
            Home
          </NavLink>
        </div>

        <div>Content B</div>
      </nav>
    </div>
  );
};
