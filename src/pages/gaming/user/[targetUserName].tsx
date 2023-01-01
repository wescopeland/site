import type { GetServerSidePropsContext } from "next";
import type { ReactElement } from "react";

import { BaseLayout } from "@/common/layouts/BaseLayout";
import type { AppPage } from "@/common/models";
import { GamingRoot } from "@/gaming/components/+root";
import type { GamingState } from "@/gaming/models";
import { buildGamingState } from "@/gaming/state/buildGamingState";
import { GamingStateProvider } from "@/gaming/state/gaming.context";
import { fetchAllAchievementsAppGames } from "@/integrations/achievements-app/queries/fetchAllAchievementsAppGames";
import { normalizeAchievementsAppGamesResponse } from "@/integrations/achievements-app/utils/normalizeAchievementsAppGamesResponse";
import { NormalizedGame } from "@/integrations/models";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const allGames: NormalizedGame[] = [];

  const targetUserName = context.params?.targetUserName as string;

  try {
    const allAchievementsAppGames = await fetchAllAchievementsAppGames(
      targetUserName
    );
    const normalized = normalizeAchievementsAppGamesResponse(
      allAchievementsAppGames
    );

    allGames.push(...normalized);
  } catch (error: unknown) {
    console.warn("There was a problem retrieving game data.", error);
  }

  const initialState = buildGamingState(allGames);

  return {
    props: {
      initialState
    }
  };
}

export default GamingPage;
