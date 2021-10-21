import type { ReactElement } from "react";

import { AboutMe } from "@/core/components/AboutMe";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { getGlobalAchievementMetadata } from "@/queries/getGlobalAchievementMetadata";

const HomePage: AppPage = () => {
  return (
    <>
      <AboutMe />
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout gamingMetadata={page.props.layout.gamingMetadata}>
      {page}
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const globalAchievementMetadata = await getGlobalAchievementMetadata();

  return {
    props: {
      layout: {
        gamingMetadata: globalAchievementMetadata
      }
    },
    revalidate: 60 * 60 // Once an hour
  };
}

export default HomePage;
