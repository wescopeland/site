import type { NextApiRequest, NextApiResponse } from "next";

import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";
import { fetchAllRaGames } from "@/integrations/ra/queries/fetchAllRaGames";
import { buildTotalPointsChartData } from "@/integrations/utils/buildTotalPointsChartData";
import { getFirstAchievement } from "@/integrations/utils/getFirstAchievement";
import { fetchAllXboxGames } from "@/integrations/xbox/queries/fetchAllXboxGames";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // const [allPsnGames, allRaGames] = await Promise.all([
    //   fetchAllPsnGames("me"),
    //   fetchAllRaGames("WCopeland")
    // ]);

    const allXboxGames = await fetchAllXboxGames();

    const firstAchievement = getFirstAchievement(allXboxGames);

    console.log(firstAchievement);

    // buildTotalPointsChartData([...allXboxGames]);

    return res.json({ success: true });

    // return res.json({
    //   props: {
    //     totalPointsChartData
    //   }
    // });
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
