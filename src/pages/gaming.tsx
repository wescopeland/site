import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { GamingRoot } from "@/gaming/components/+root";
import { ChartDatum } from "@/gaming/models";
import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";
import { fetchAllRaGames } from "@/integrations/ra/queries/fetchAllRaGames";
import { buildTotalPointsChartData } from "@/integrations/utils/buildTotalPointsChartData";
import { fetchAllXboxGames } from "@/integrations/xbox/queries/fetchAllXboxGames";

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
  const [allPsnGames, allRaGames, allXboxGames] = await Promise.all([
    fetchAllPsnGames("me"),
    fetchAllRaGames("WCopeland"),
    fetchAllXboxGames()
  ]);

  // Calculate this on the server to improve performance.
  const totalPointsChartData = buildTotalPointsChartData([
    ...allPsnGames,
    ...allRaGames,
    ...allXboxGames
  ]);

  return {
    props: {
      totalPointsChartData,
      fallback: {
        "/api/gaming/games": [...allPsnGames, ...allRaGames, ...allXboxGames]
      }
    },
    revalidate: 60 * 60 * 24 // one day
  };
}

export default GamingPage;
