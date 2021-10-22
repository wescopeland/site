import cc from "classcat";
import Link from "next/link";
import type { FC } from "react";

interface NavLinkProps {
  href: string;
  isActive: boolean;
}

export const NavLink: FC<NavLinkProps> = ({ children, href, isActive }) => {
  return (
    <Link href={href} passHref>
      <a
        className={cc([
          "transition mx-2 px-3 py-2 text-black dark:text-white",
          "border-b-2 border-b-transparent hover:border-b-gray-500",
          isActive
            ? "font-bold border-b-2 border-b-gray-700 dark:border-b-gray-100"
            : "text-gray-400"
        ])}
      >
        {children}
      </a>
    </Link>
  );
};
