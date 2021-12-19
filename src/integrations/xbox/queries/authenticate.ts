import { authenticate as xboxAuthenticate } from "@xboxreplay/xboxlive-auth";

import type { XboxAuthenticationResponse } from "../models";

const xboxEmail = process.env.XBOX_EMAIL ?? "";
const xboxPassword = process.env.XBOX_PASSWORD ?? "";

export const authenticate = async () => {
  return (await xboxAuthenticate(
    xboxEmail,
    xboxPassword
  )) as unknown as XboxAuthenticationResponse;
};
