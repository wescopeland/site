import type { NextApiRequest, NextApiResponse } from "next";

import { authenticate } from "@/integrations/psn/queries/authenticate";
import { getAllUserTrophies } from "@/integrations/psn/queries/getAllUserTrophies";
import { buildTotalPointsChartData } from "@/integrations/utils/buildTotalPointsChartData";
import { findAchievementsEarnedOnDate } from "@/integrations/utils/findAchievementsEarnedOnDate";
import { findRarestAchievements } from "@/integrations/utils/findRarestAchievements";
import { findRarestCompletions } from "@/integrations/utils/findRarestCompletions";
import { getMostRecentAchievement } from "@/integrations/utils/getMostRecentAchievement";
import { getMostRecentCompletion } from "@/integrations/utils/getMostRecentCompletion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const authorization = await authenticate();
    const allPsnGames = await getAllUserTrophies(authorization, "me");

    const rarestCompletions = findRarestCompletions(allPsnGames, 5);
    console.log({ rarestCompletions });

    return res.json(allPsnGames);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
