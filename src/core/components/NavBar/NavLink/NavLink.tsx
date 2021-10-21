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
          "transition px-3 py-2 rounded-md",
          "bg-white hover:bg-gray-100 hover:text-black",
          isActive ? "font-semibold" : "text-gray-400"
        ])}
      >
        {children}
      </a>
    </Link>
  );
};
