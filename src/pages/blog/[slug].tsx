import type { ReactElement } from "react";

import type { BlogPostRootProps } from "@/blog/components/BlogPostRoot";
import { BlogPostRoot } from "@/blog/components/BlogPostRoot";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";

import { allBlogPosts } from ".contentlayer/data";

const BlogPostPage: AppPage<BlogPostRootProps> = (props) => (
  <BlogPostRoot {...props} />
);

BlogPostPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticPaths() {
  return {
    paths: allBlogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogPosts.find((post) => post.slug === params.slug);

  return {
    props: {
      post
    }
  };
}

export default BlogPostPage;
