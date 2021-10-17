import type {
  TitleTrophiesResponse,
  TrophiesEarnedForTitleResponse,
  Trophy} from "psn-api";
import {
  getTrophiesEarnedForTitle,
  getTrophiesForTitle,
  getTrophyTitlesForUser} from "psn-api";

import type { PsnProfile } from "./models";

export const buildProfile = async (
  accessToken: string
): Promise<PsnProfile> => {
  const { trophyTitles } = await getTrophyTitlesForUser({ accessToken }, "me");
  const profile = trophyTitles as Partial<PsnProfile>;

  const trophyMetaPromises: Array<Promise<TitleTrophiesResponse>> = [];
  const earnedTrophyPromises: Array<Promise<TrophiesEarnedForTitleResponse>> =
    [];

  for (const title of trophyTitles) {
    trophyMetaPromises.push(
      getTrophiesForTitle({ accessToken }, title.npCommunicationId, "all", {
        npServiceName:
          title.trophyTitlePlatform !== "PS5" ? "trophy" : undefined
      })
    );

    earnedTrophyPromises.push(
      getTrophiesEarnedForTitle(
        { accessToken },
        "me",
        title.npCommunicationId,
        "all",
        {
          npServiceName:
            title.trophyTitlePlatform !== "PS5" ? "trophy" : undefined
        }
      )
    );
  }

  const trophyMetaResponses = await Promise.all(trophyMetaPromises);
  const earnedTrophyResponses = await Promise.all(earnedTrophyPromises);

  for (const [index, trophyTitle] of profile.entries()) {
    trophyTitle.trophies = mergeTrophyLists(
      trophyMetaResponses[index].trophies,
      earnedTrophyResponses[index].trophies
    );
  }

  return profile;
};

const mergeTrophyLists = (
  titleTrophies: Trophy[],
  earnedTrophies: Trophy[]
) => {
  const mergedTrophies: any[] = [];

  for (const earnedTrophy of earnedTrophies) {
    const foundTitleTrophy = titleTrophies.find(
      (t) => t.trophyId === earnedTrophy.trophyId
    );

    mergedTrophies.push({ ...earnedTrophy, ...foundTitleTrophy });
  }

  return mergedTrophies;
};
