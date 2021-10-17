import type { PsnProfile } from "./models";

import { getAllTrophies } from "./getAllTrophies";

export const getMostRecentTrophy = (profile: PsnProfile) => {
  const allTrophies = getAllTrophies(profile);

  const onlyEarned = allTrophies.filter((trophy) => trophy.earned);
  const sortedByEarnedDateTime = onlyEarned.sort((a, b) => {
    const aDate = new Date(a.earnedDateTime);
    const bDate = new Date(b.earnedDateTime);

    return bDate.getTime() - aDate.getTime();
  });

  return sortedByEarnedDateTime[0];
};
