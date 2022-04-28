import cc from "classcat";
import dayjs from "dayjs";
import Link from "next/link";
import type { FC } from "react";

import { AppRoutes } from "@/core/utils/AppRoutes";

interface PostLinkProps {
  postTitle: string;
  publishedOn: string;
  postSlug: string;
}

export const PostLink: FC<PostLinkProps> = ({
  postTitle,
  publishedOn,
  postSlug
}) => {
  return (
    <li className="list-none group">
      <Link href={AppRoutes.BlogPostPage({ slug: postSlug })} passHref>
        <a
          className={cc([
            "flex gap-x-4 w-full group items-center justify-between",
            "select-none cursor-pointer",
            "py-2 hover:bg-gray-100 dark:hover:bg-gray-900",
            "transition hover:no-underline font-normal"
          ])}
        >
          <p className="text-black transition group-active:scale-95 group-hover:translate-x-2 dark:text-white">
            {postTitle}
          </p>

          <p className="text-black transition dark:text-white whitespace-nowrap">
            {dayjs(publishedOn).format("MMM DD")}
          </p>
        </a>
      </Link>
    </li>
  );
};
