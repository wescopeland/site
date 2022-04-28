import type { BlogPost } from "contentlayer/generated";
import type { FC } from "react";

import { PostLink } from "../PostLink";

interface YearPostsBlockProps {
  year: number;
  posts: BlogPost[];
}

export const YearPostsBlock: FC<YearPostsBlockProps> = ({ year, posts }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <h2 className="w-32 mb-2 text-2xl">{year}</h2>
      <ul className="w-full divide-y dark:divide-gray-700">
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
