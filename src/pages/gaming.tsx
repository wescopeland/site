import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { GamingRoot } from "@/gaming/components/+root";
import { ChartDatum } from "@/gaming/models";
import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";
import { fetchAllUserAchievements } from "@/integrations/ra/queries/fetchAllUserAchievements";
import { buildTotalPointsChartData } from "@/integrations/utils/buildTotalPointsChartData";

interface GamingPageProps {
  totalPointsChartData: ChartDatum[];
}

const GamingPage: AppPage<GamingPageProps> = ({ totalPointsChartData }) => (
  <GamingRoot totalPointsChartData={totalPointsChartData} />
);

GamingPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps() {
  const [allPsnGames, allUserAchievements] = await Promise.all([
    fetchAllPsnGames("me"),
    fetchAllUserAchievements("WCopeland")
  ]);

  // Calculate this on the server to improve performance.
  const totalPointsChartData = buildTotalPointsChartData([
    ...allPsnGames,
    ...allUserAchievements
  ]);

  return {
    props: {
      totalPointsChartData,
      fallback: {
        "/api/gaming/games": [...allPsnGames, ...allUserAchievements]
      }
    },
    revalidate: 60 * 60 * 24 // one day
  };
}

export default GamingPage;
