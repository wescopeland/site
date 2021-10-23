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
          "border-b-2 border-t-2 border-b-transparent border-t-transparent",
          "hover:border-b-gray-500 hover:border-t-gray-500 hover:no-underline",
          isActive
            ? "font-bold border-b-2 border-b-gray-700 border-t-gray-700 dark:border-b-gray-100 dark:border-t-gray-100"
            : "text-gray-700"
        ])}
      >
        {children}
      </a>
    </Link>
  );
};
