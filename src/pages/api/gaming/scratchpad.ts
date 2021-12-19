import type { NextApiRequest, NextApiResponse } from "next";

import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";
import { fetchAllRaGames } from "@/integrations/ra/queries/fetchAllRaGames";
import { fetchAllXboxGames } from "@/integrations/xbox/queries/fetchAllXboxGames";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const [allPsnGames, allRaGames, allXboxGames] = await Promise.all([
      fetchAllPsnGames("me"),
      fetchAllRaGames("WCopeland"),
      fetchAllXboxGames()
    ]);

    return res.json([...allPsnGames, ...allRaGames, ...allXboxGames]);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
