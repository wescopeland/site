import type { NormalizedGame } from "@/integrations/models";
import { getUserPlatinumCount } from "@/integrations/psn/utils/getUserPlatinumCount";
import { getUserMasteryCount } from "@/integrations/ra/utils/getUserMasteryCount";
import { buildTotalPointsChartData } from "@/integrations/utils/buildTotalPointsChartData";
import { findRarestAchievements } from "@/integrations/utils/findRarestAchievements";
import { findRarestCompletions } from "@/integrations/utils/findRarestCompletions";
import { getMostRecentAchievement } from "@/integrations/utils/getMostRecentAchievement";
import { getMostRecentCompletion } from "@/integrations/utils/getMostRecentCompletion";
import { getMostRecentGame } from "@/integrations/utils/getMostRecentGame";
import { getUserGamerscoreCount } from "@/integrations/xbox/utils/getUserGamerscoreCount";

import type { GamingState } from "../models";

export const buildGamingState = (allGames: NormalizedGame[]): GamingState => {
  const platinumCount = getUserPlatinumCount(allGames);
  const gamerscoreCount = getUserGamerscoreCount(allGames);
  const masteryCount = getUserMasteryCount(allGames);

  const mostRecentGame = getMostRecentGame(allGames);
  const mostRecentAchievement = getMostRecentAchievement(allGames);
  const mostRecentCompletion = getMostRecentCompletion(allGames);

  const totalPointsChartData = buildTotalPointsChartData(allGames);

  const rarestAchievements = findRarestAchievements(allGames, 5);
  const rarestCompletions = findRarestCompletions(allGames, 5);

  return {
    serviceSummaries: {
      platinumCount,
      gamerscoreCount,
      masteryCount
    },

    mostRecentGame,
    mostRecentAchievement,
    mostRecentCompletion,

    totalPointsChartData,

    rarestAchievements,
    rarestCompletions
  };
};
