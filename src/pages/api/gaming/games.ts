import type { NextApiRequest, NextApiResponse } from "next";

import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const allPsnGames = await fetchAllPsnGames("me");

    return res.json([...allPsnGames]);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
