import type { NextApiRequest, NextApiResponse } from "next";

import { fetchAllUserAchievements } from "@/integrations/ra/queries/fetchAllUserAchievements";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const allUserAchievements = await fetchAllUserAchievements("WCopeland");

    return res.json(allUserAchievements);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
