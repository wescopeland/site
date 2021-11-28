import cc from "classcat";
import dayjs from "dayjs";
import Link from "next/link";
import type { VFC } from "react";

import { AppRoutes } from "@/core/utils/AppRoutes";

interface PostLinkProps {
  postTitle: string;
  publishedOn: string;
  postSlug: string;
}

export const PostLink: VFC<PostLinkProps> = ({
  postTitle,
  publishedOn,
  postSlug
}) => {
  return (
    <li className="list-none group">
      <Link href={AppRoutes.BlogPostPage({ slug: postSlug })} passHref>
        <a
          className={cc([
            "flex w-full group items-center justify-between",
            "select-none cursor-pointer",
            "py-2 hover:bg-gray-100 dark:hover:bg-gray-900",
            "transition hover:no-underline font-normal"
          ])}
        >
          <p className="transition group-active:scale-95 group-hover:translate-x-2 text-black dark:text-white">
            {postTitle}
          </p>

          <p className="transition text-black dark:text-white">
            {dayjs(publishedOn).format("MMM DD")}
          </p>
        </a>
      </Link>
    </li>
  );
};
