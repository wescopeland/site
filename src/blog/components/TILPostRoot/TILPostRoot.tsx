import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import type { FC } from "react";

import type { TIL } from "@/blog/models";

dayjs.extend(advancedFormat);

interface TILPostRootProps {
  post: TIL;
}

export const TILPostRoot: FC<TILPostRootProps> = ({ children, post }) => {
  const formattedDate = dayjs(post.publishedAt).format("MMMM Do, YYYY");

  return (
    <>
      <p className="font-semibold text-gray-500">
        On {formattedDate}, I learned...
      </p>

      <h1 className="mb-8 text-4xl font-bold tracking-tight text-black">
        {post.title}
      </h1>

      {children}
    </>
  );
};
