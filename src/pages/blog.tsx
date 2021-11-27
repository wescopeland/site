import type { ReactElement } from "react";

import type { BlogRootProps } from "@/blog/components/BlogRoot";
import { BlogRoot } from "@/blog/components/BlogRoot";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";

import { allBlogPosts } from ".contentlayer/data";
import type { BlogPost } from ".contentlayer/types";

const BlogPage: AppPage<BlogRootProps> = (props) => <BlogRoot {...props} />;

BlogPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

const categorizePostsByYear = (posts: BlogPost[]) => {
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

export async function getStaticProps() {
  const categorizedPostsByYear = categorizePostsByYear(allBlogPosts);

  return {
    props: {
      posts: categorizedPostsByYear
    }
  };
}

export default BlogPage;
