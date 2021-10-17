import type { Trophy } from "psn-api";
import type { PsnProfile } from "./models";

export const getAllTrophies = (
  profile: PsnProfile
): Array<Trophy & { gameName: string }> => {
  const allTrophies = [];

  for (const title of profile) {
    if (!title.hiddenFlag) {
      for (const trophy of title.trophies) {
        allTrophies.push({
          ...trophy,
          gameName: title.trophyTitleName
        });
      }
    }
  }

  return allTrophies;
};
