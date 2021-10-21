import { getMDXComponent } from "mdx-bundler/client";
import type { ReactElement } from "react";
import { useMemo } from "react";

import { TILPostRoot } from "@/blog/components/TILPostRoot";
import type { TIL } from "@/blog/models";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { getGlobalAchievementMetadata } from "@/queries/getGlobalAchievementMetadata";

import { allTILs } from ".contentlayer/data";

interface TILPostPageProps {
  post: TIL;
}

const TILPostPage: AppPage<TILPostPageProps> = ({ post }) => {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  );

  return (
    <TILPostRoot post={post}>
      <Component />
    </TILPostRoot>
  );
};

TILPostPage.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout gamingMetadata={page.props.layout.gamingMetadata}>
      {page}
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: allTILs.map((tilPost) => ({ params: { slug: tilPost.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const globalAchievementMetadata = await getGlobalAchievementMetadata();

  const post = allTILs.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
      layout: {
        gamingMetadata: globalAchievementMetadata
      }
    }
  };
}

export default TILPostPage;
