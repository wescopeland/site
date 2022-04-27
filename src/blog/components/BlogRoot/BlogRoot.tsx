import type { BlogPost } from "contentlayer/generated";
import type { VFC } from "react";

import { Animate } from "@/core/components/Animate";
import { H1 } from "@/core/components/H1";

import { YearPostsBlock } from "../YearPostsBlock";

export interface BlogRootProps {
  posts: Record<number, BlogPost[]>;
}

export const BlogRoot: VFC<BlogRootProps> = ({ posts }) => {
  return (
    <>
      <Animate.FadeUpOnMount>
        <H1>Blog</H1>
      </Animate.FadeUpOnMount>

      <div className="grid gap-y-4">
        <Animate.StaggerOnMount delay={150}>
          {Object.entries(posts)
            .sort(([aYear], [bYear]) => Number(bYear) - Number(aYear))
            .map(([yearLabel, yearPosts]) => (
              <YearPostsBlock
                key={yearLabel}
                year={Number(yearLabel)}
                posts={yearPosts}
              />
            ))}
        </Animate.StaggerOnMount>
      </div>
    </>
  );
};
