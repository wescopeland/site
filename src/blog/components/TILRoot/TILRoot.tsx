import type { VFC } from "react";

import { TILBlogRoll } from "@/blog/components/TILBlogRoll";
import type { TIL } from "@/blog/models";

interface TILRootProps {
  posts: Partial<TIL>[];
}

export const TILRoot: VFC<TILRootProps> = ({ posts }) => {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-1 text-4xl font-bold tracking-tight text-black">
          Today I Learned
        </h1>
      </div>

      <TILBlogRoll posts={posts} />
    </>
  );
};
