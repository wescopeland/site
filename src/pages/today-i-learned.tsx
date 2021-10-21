import type { ReactElement } from "react";

import { TILRoot } from "@/blog/components/TILRoot";
import type { TIL } from "@/blog/models";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { getGlobalAchievementMetadata } from "@/queries/getGlobalAchievementMetadata";

import { allTILs } from ".contentlayer/data";

interface TodayILearnedPageProps {
  posts: Partial<TIL>[];
}

const TodayILearnedPage: AppPage<TodayILearnedPageProps> = ({ posts }) => (
  <TILRoot posts={posts} />
);

TodayILearnedPage.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout gamingMetadata={page.props.layout.gamingMetadata}>
      {page}
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const globalAchievementMetadata = await getGlobalAchievementMetadata();

  const posts: Partial<TIL>[] = allTILs.map((TIL) => ({
    title: TIL.title,
    publishedAt: TIL.publishedAt,
    slug: TIL.slug
  }));

  return {
    props: {
      posts,
      layout: {
        gamingMetadata: globalAchievementMetadata
      }
    },
    revalidate: 60 * 60 // Once an hour
  };
}

export default TodayILearnedPage;
