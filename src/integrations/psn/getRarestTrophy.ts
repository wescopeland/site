import type { PsnProfile } from "./models";
import type { Trophy } from "psn-api";

import { getAllTrophies } from "./getAllTrophies";

export const getRarestTrophy = (profile: PsnProfile): Trophy => {
  const allTrophies = getAllTrophies(profile);

  let rarestTrophy: Trophy;
  let lowestEarnedRate = 100;
  for (const trophy of allTrophies) {
    if (trophy.earned && Number(trophy.trophyEarnedRate) < lowestEarnedRate) {
      rarestTrophy = trophy;
      lowestEarnedRate = Number(trophy.trophyEarnedRate);
    }
  }

  return rarestTrophy;
};
