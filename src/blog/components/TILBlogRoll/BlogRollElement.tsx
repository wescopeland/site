import cc from "classcat";
import dayjs from "dayjs";
import Link from "next/link";
import type { VFC } from "react";
import { BsArrowRight } from "react-icons/bs";

import styles from "./BlogRollElement.module.css";

interface BlogRollElementProps {
  publishedAt: string;
  title: string;
  href: string;
}

export const BlogRollElement: VFC<BlogRollElementProps> = ({
  publishedAt,
  title,
  href
}) => {
  const formattedDate = dayjs(publishedAt).format("MMM DD");

  return (
    <Link href={href} passHref>
      <a
        className={cc([
          styles.root,
          "group dark:hover:bg-gray-700 dark:hover:border-gray-50 hover:no-underline",
          "text-black dark:text-white"
        ])}
      >
        <div className="flex">
          <p className="mr-6 font-semibold text-gray-400 whitespace-nowrap">
            {formattedDate}
          </p>
          <p className="font-semibold">{title}</p>
        </div>

        <BsArrowRight className="hidden sm:inline transition group-hover:translate-x-1.5" />
      </a>
    </Link>
  );
};
