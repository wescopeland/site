import type { NextApiRequest, NextApiResponse } from "next";

import { authenticate } from "@/integrations/psn/queries/authenticate";
import { getAllUserTrophies } from "@/integrations/psn/queries/getAllUserTrophies";
import { getMostRecentCompletion } from "@/integrations/utils/getMostRecentCompletion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const authorization = await authenticate();
    const allPsnGames = await getAllUserTrophies(authorization, "me");

    const mostRecentCompletion = getMostRecentCompletion(allPsnGames);
    console.log({ mostRecentCompletion });

    return res.json(allPsnGames);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
