import { allBlogPosts } from "contentlayer/generated";
import type { ReactElement } from "react";

import type { BlogRootProps } from "@/blog/components/BlogRoot";
import { BlogRoot } from "@/blog/components/BlogRoot";
import { categorizePostsByYear } from "@/blog/utils/categorizePostsByYear";
import { BaseLayout } from "@/common/layouts/BaseLayout";
import type { AppPage } from "@/common/models";

const BlogPage: AppPage<BlogRootProps> = (props) => <BlogRoot {...props} />;

BlogPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
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
