import urlcat from "urlcat";

import type { FetchAllAchievementsAppHighPriorityUsersResponse } from "../models";

export const fetchAllHighPriorityUsers = async () => {
  const apiBaseUrl = "https://achievements-app-production.up.railway.app/api";
  const requestUrl = urlcat(apiBaseUrl, "/public/user/highPriority");

  return (await fetch(requestUrl).then((response) =>
    response.json()
  )) as FetchAllAchievementsAppHighPriorityUsersResponse;
};
