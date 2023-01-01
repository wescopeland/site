import urlcat from "urlcat";

import type { FetchAllAchievementsAppGamesResponse } from "../models";

export const fetchAllAchievementsAppGames = async (targetUserName: string) => {
  const apiBaseUrl = "https://achievements-app-production.up.railway.app/api";
  const requestUrl = urlcat(apiBaseUrl, "/public/user/:targetUserName", {
    targetUserName
  });

  return (await fetch(requestUrl).then((response) =>
    response.json()
  )) as FetchAllAchievementsAppGamesResponse;
};
