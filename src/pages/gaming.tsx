import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { GamingRoot } from "@/gaming/components/+root";
import { ChartDatum } from "@/gaming/models";
import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";
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
  const allPsnGames = await fetchAllPsnGames("me");

  // Calculate this on the server to improve performance.
  const totalPointsChartData = buildTotalPointsChartData(allPsnGames);

  return {
    props: {
      totalPointsChartData,
      fallback: {
        "/api/gaming/games": [...allPsnGames]
      }
    },
    revalidate: 60 * 60 * 24 // one day
  };
}

export default GamingPage;
