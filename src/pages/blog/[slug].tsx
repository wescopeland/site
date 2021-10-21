import { getMDXComponent } from "mdx-bundler/client";
import type { ReactElement } from "react";
import { useMemo } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { getGlobalAchievementMetadata } from "@/queries/getGlobalAchievementMetadata";

import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";

interface BlogPostPageProps {
  post: Blog;
}

const BlogPostPage: AppPage<BlogPostPageProps> = ({ post }) => {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  );

  return <Component />;
};

BlogPostPage.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout gamingMetadata={page.props.layout.gamingMetadata}>
      {page}
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blogPost) => ({ params: { slug: blogPost.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const globalAchievementMetadata = await getGlobalAchievementMetadata();

  const post = allBlogs.find((post) => post.slug === params.slug);

  return {
    props: {
      layout: {
        gamingMetadata: globalAchievementMetadata
      },
      post
    }
  };
}

export default BlogPostPage;
