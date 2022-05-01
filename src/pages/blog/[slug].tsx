import { allBlogPosts } from "contentlayer/generated";
import type { GetStaticPropsContext } from "next";
import type { ReactElement } from "react";

import type { BlogPostRootProps } from "@/blog/components/BlogPostRoot";
import { BlogPostRoot } from "@/blog/components/BlogPostRoot";
import { BaseLayout } from "@/common/layouts/BaseLayout";
import type { AppPage } from "@/common/models";

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

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allBlogPosts.find((post) => post.slug === params!.slug);

  return {
    props: {
      post
    }
  };
}

export default BlogPostPage;
