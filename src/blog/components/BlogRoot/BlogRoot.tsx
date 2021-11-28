import type { VFC } from "react";

import { Animate } from "@/core/components/Animate";

import { YearPostsBlock } from "../YearPostsBlock";
import type { BlogPost } from ".contentlayer/types";

export interface BlogRootProps {
  posts: Record<number, BlogPost[]>;
}

export const BlogRoot: VFC<BlogRootProps> = ({ posts }) => {
  return (
    <>
      <Animate.FadeUp shouldAnimateOnMount>
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        </div>
      </Animate.FadeUp>

      <div className="grid gap-y-4">
        <Animate.Stagger shouldAnimateOnMount delay={150}>
          {Object.entries(posts)
            .sort(([aYear], [bYear]) => Number(bYear) - Number(aYear))
            .map(([yearLabel, yearPosts]) => (
              <YearPostsBlock
                key={yearLabel}
                year={Number(yearLabel)}
                posts={yearPosts}
              />
            ))}
        </Animate.Stagger>
      </div>
    </>
  );
};
