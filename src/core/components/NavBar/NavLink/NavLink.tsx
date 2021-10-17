import cc from "classcat";
import Link from "next/link";
import type { FC } from "react";

import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  isActive: boolean;
}

export const NavLink: FC<NavLinkProps> = ({ children, href, isActive }) => {
  const classes = cc([styles.root, isActive && styles["root--active"]]);

  return (
    <Link href={href} passHref>
      <a className={classes}>{children}</a>
    </Link>
  );
};
