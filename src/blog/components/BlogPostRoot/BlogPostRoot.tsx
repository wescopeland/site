import { useMDXComponent } from "next-contentlayer/hooks";
import type { VFC } from "react";

import type { BlogPost } from ".contentlayer/types";

export interface BlogPostRootProps {
  post: BlogPost;
}

export const BlogPostRoot: VFC<BlogPostRootProps> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <div className="prose max-w-full">
      <Component />
    </div>
  );
};
