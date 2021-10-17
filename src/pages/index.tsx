import { performance } from "perf_hooks";
import type { ReactElement } from "react";

import { AboutMe } from "@/core/components/AboutMe";
import { NavBar } from "@/core/components/NavBar";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { authenticate } from "@/integrations/psn/authenticate";
import { buildProfile } from "@/integrations/psn/buildProfile";
import { getMostRecentTrophy } from "@/integrations/psn/getMostRecentTrophy";

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
    <BaseLayout mostRecentTrophy={page.props.mostRecentTrophy}>
      {page}
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const start = performance.now();
  const authorization = await authenticate();
  const profile = await buildProfile(authorization.accessToken);
  const end = performance.now();

  const measurement = end - start;
  console.log({ measurement });

  const mostRecent = getMostRecentTrophy(profile);

  return {
    props: {
      mostRecentTrophy: {
        trophyName: mostRecent.trophyName,
        trophyGame: mostRecent.gameName,
        trophyGrade: mostRecent.trophyType,
        earnedDate: mostRecent.earnedDateTime
      }
    }
  };
}

export default HomePage;
