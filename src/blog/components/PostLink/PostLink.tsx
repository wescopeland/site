import cc from "classcat";
import dayjs from "dayjs";
import type { VFC } from "react";

interface PostLinkProps {
  postTitle: string;
  publishedOn: string;
}

export const PostLink: VFC<PostLinkProps> = ({ postTitle, publishedOn }) => {
  return (
    <li className="list-none group">
      <div
        className={cc([
          "flex w-full group items-center justify-between",
          "select-none cursor-pointer",
          "py-2 hover:bg-gray-100 dark:hover:bg-gray-900",
          "transition"
        ])}
      >
        <p className="transition group-hover:translate-x-2 text-black dark:text-white">
          {postTitle}
        </p>
        <p className="transition text-black dark:text-white">
          {dayjs(publishedOn).format("MMM DD")}
        </p>
      </div>
    </li>
  );
};
