import { authenticate } from "@/integrations/psn/queries/authenticate";
import { getAllUserTrophies } from "@/integrations/psn/queries/getAllUserTrophies";

export const fetchAllPsnGames = async (targetAccountId: string) => {
  const authorization = await authenticate();

  return await getAllUserTrophies(authorization, targetAccountId);
};
