import { call as xblCall } from "@xboxreplay/xboxlive-api";
import urlcat from "urlcat";

import type {
  XboxAuthenticationResponse,
  XboxTitleHistoryResponse
} from "../models";

export async function fetchUserXboxTitleHistory(
  authorization: XboxAuthenticationResponse
) {
  const apiUrl = "https://titlehub.xboxlive.com";
  const requestUrl =
    "/users/xuid(:xuid)/titles/titlehistory/decoration/achievement,image";

  const titleHistory = await xblCall(
    {
      url: urlcat(apiUrl, requestUrl, { xuid: authorization.xuid }),
      method: "GET"
    },
    {
      XSTSToken: authorization.xsts_token,
      userHash: authorization.user_hash
    },
    2
  );

  return titleHistory as XboxTitleHistoryResponse;
}
