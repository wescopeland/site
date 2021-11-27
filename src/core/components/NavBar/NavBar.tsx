import cc from "classcat";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, VFC } from "react";

import { AppRoutes } from "@/core/utils/AppRoutes";

export const NavBar: VFC = () => {
  return (
    <div
      className={cc([
        "fixed bottom-0 right-1/2 z-50 h-10 pointer-events-none",
        "transform translate-x-1/2 -translate-y-1/2",
        "lg:block lg:relative lg:transform-none lg:right-auto",
        "xl:absolute xl:w-full xl:-ml-4 xl:top-4 xl:flex xl:justify-center"
      ])}
    >
      <nav
        className={cc([
          "pointer-events-auto",
          "w-80 h-10 bg-white border border-gray-400 sm:border-gray-200 rounded-xl shadow-sm",
          "bg-opacity-50 backdrop-filter backdrop-blur backdrop-grayscale",
          "sm:bg-opacity-100 sm:backdrop-filter-none",
          "dark:bg-dark dark:border-gray-300 sm:dark:border-gray-700",
          "flex justify-between items-center p-0.5 gap-x-1"
        ])}
      >
        <NavBarLink href={AppRoutes.HomePage()}>Home</NavBarLink>
        <NavBarLink href={AppRoutes.ProjectsPage()}>Projects</NavBarLink>
        <NavBarLink href={AppRoutes.GamingPage()}>Gaming</NavBarLink>
        <NavBarLink href={AppRoutes.BlogPage()}>Blog</NavBarLink>
      </nav>
    </div>
  );
};

interface NavBarLinkProps {
  href: string;
}

const NavBarLink: FC<NavBarLinkProps> = ({ children, href }) => {
  const { route } = useRouter();

  const isActive = route === href;

  return (
    <Link href={href} passHref>
      <a
        className={cc([
          "flex items-center justify-center",
          "no-underline hover:no-underline w-full h-full rounded-xl",
          "transition",
          "hover:bg-gray-200 dark:hover:bg-gray-700 hover:bg-opacity-70 hover:text-black",
          isActive
            ? "bg-gray-200 dark:bg-gray-700 bg-opacity-70 font-semibold text-black dark:text-white"
            : "font-normal text-gray-700 dark:text-gray-300 bg-transparent"
        ])}
      >
        {children}
      </a>
    </Link>
  );
};
