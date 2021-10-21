import type { ReactElement } from "react";

import { AboutMe } from "@/core/components/AboutMe";
import { NavBar } from "@/core/components/NavBar";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { getGlobalAchievementMetadata } from "@/queries/getGlobalAchievementMetadata";

const HomePage: AppPage = () => {
  return (
    <>
      <NavBar />

      <main>
        <div className="container max-w-2xl px-0 pb-12 mx-auto">
          <AboutMe />
        </div>
      </main>
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
    }
  };
}

export default HomePage;
