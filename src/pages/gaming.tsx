import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { GamingRoot } from "@/gaming/components/+root";
import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";

const GamingPage: AppPage = () => <GamingRoot />;

GamingPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps() {
  const allPsnGames = await fetchAllPsnGames("me");

  return {
    props: {
      fallback: {
        "/api/gaming/games": [...allPsnGames]
      }
    },
    revalidate: 60
  };
}

export default GamingPage;
