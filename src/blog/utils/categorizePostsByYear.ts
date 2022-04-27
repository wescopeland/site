import type { BlogPost } from "contentlayer/generated";

export const categorizePostsByYear = (posts: BlogPost[]) => {
  const categorized: Record<number, BlogPost[]> = {};

  for (const post of posts) {
    const postYear = new Date(post.publishedOn).getFullYear();

    if (!categorized[postYear]) {
      categorized[postYear] = [];
    }

    categorized[postYear].push(post);
  }

  return categorized;
};
