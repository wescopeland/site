import type { ReactElement } from "react";

import { BaseLayout } from "@/common/layouts/BaseLayout";
import type { AppPage } from "@/common/models";
import { GamingRoot } from "@/gaming/components/+root";
import type { GamingState } from "@/gaming/models";
import { buildGamingState } from "@/gaming/state/buildGamingState";
import { GamingStateProvider } from "@/gaming/state/gaming.context";
import { mockAllGames } from "@/gaming/state/mockAllGames";
import { NormalizedGame } from "@/integrations/models";
import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";
import { fetchAllRaGames } from "@/integrations/ra/queries/fetchAllRaGames";
import { fetchAllXboxGames } from "@/integrations/xbox/queries/fetchAllXboxGames";

interface GamingPageProps {
  initialState: GamingState;
}

const GamingPage: AppPage<GamingPageProps> = ({ initialState }) => (
  <GamingStateProvider value={initialState}>
    <GamingRoot />
  </GamingStateProvider>
);

GamingPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps() {
  let allGames: NormalizedGame[] = [];

  if (process.env.USE_MOCK_DATA === "true") {
    console.info("Using mockAllGames for the gaming page.");
    allGames = mockAllGames;
  } else {
    try {
      const [allPsnGames, allRaGames, allXboxGames] = await Promise.all([
        fetchAllPsnGames("me"),
        fetchAllRaGames("WCopeland"),
        fetchAllXboxGames()
      ]);

      allGames.push(...allPsnGames, ...allRaGames, ...allXboxGames);
    } catch (error: unknown) {
      console.warn("There was a problem retrieving game data.", error);
    }
  }

  const initialState = buildGamingState(allGames);

  return {
    props: {
      initialState
    },
    revalidate: 60 * 60 * 24 // one day
  };
}

export default GamingPage;
