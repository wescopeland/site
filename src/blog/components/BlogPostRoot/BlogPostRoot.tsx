import type { BlogPost } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { VFC } from "react";

export interface BlogPostRootProps {
  post: BlogPost;
}

export const BlogPostRoot: VFC<BlogPostRootProps> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <div className="max-w-full prose">
      <Component />
    </div>
  );
};
