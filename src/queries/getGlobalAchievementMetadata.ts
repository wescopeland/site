import { authenticate } from "@/integrations/psn/authenticate";
import { buildProfile } from "@/integrations/psn/buildProfile";
import { getMostRecentTrophy } from "@/integrations/psn/getMostRecentTrophy";

export const getGlobalAchievementMetadata = async () => {
  // PSN
  const authorization = await authenticate();
  const profile = await buildProfile(authorization.accessToken);
  const mostRecentTrophy = getMostRecentTrophy(profile);

  return { mostRecentTrophy };
};
