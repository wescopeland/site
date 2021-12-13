import type { NextApiRequest, NextApiResponse } from "next";

import { authenticate } from "@/integrations/psn/queries/authenticate";
import { getAllUserTrophies } from "@/integrations/psn/queries/getAllUserTrophies";

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

const fetchAllPsnGames = async (targetAccountId: string) => {
  const authorization = await authenticate();

  return await getAllUserTrophies(authorization, targetAccountId);
};
