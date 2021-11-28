import type { VFC } from "react";

import { PostLink } from "../PostLink";
import type { BlogPost } from ".contentlayer/types";

interface YearPostsBlockProps {
  year: number;
  posts: BlogPost[];
}

export const YearPostsBlock: VFC<YearPostsBlockProps> = ({ year, posts }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <h2 className="text-2xl w-32 mb-2">{year}</h2>
      <ul className="divide-y dark:divide-gray-700 w-full">
        {posts
          .sort(
            (a, b) =>
              new Date(b.publishedOn).getTime() -
              new Date(a.publishedOn).getTime()
          )
          .map((post) => (
            <PostLink
              key={post.slug}
              postTitle={post.title}
              publishedOn={post.publishedOn}
              postSlug={post.slug}
            />
          ))}
      </ul>
    </div>
  );
};
