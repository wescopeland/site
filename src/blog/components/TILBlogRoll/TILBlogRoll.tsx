import type { VFC } from "react";

import type { TIL } from "@/blog/models";
import { AppRoutes } from "@/core/utils/AppRoutes";

import { BlogRollElement } from "./BlogRollElement";

interface TILBlogRollProps {
  posts: Partial<TIL>[];
}

export const TILBlogRoll: VFC<TILBlogRollProps> = ({ posts }) => {
  return (
    <div className="grid">
      <p className="text-2xl">2021</p>

      <div>
        {posts.map((post) => (
          <BlogRollElement
            key={post.slug}
            title={post.title}
            publishedAt={post.publishedAt}
            href={AppRoutes.TodayILearnedPostPage({ postSlug: post.slug })}
          />
        ))}
      </div>
    </div>
  );
};
