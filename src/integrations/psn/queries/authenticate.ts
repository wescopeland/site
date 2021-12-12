import {
  exchangeCodeForAccessToken,
  exchangeNpssoForCode,
  getUserTitles
} from "psn-api";

const npsso = process.env.PSN_NPSSO ?? "";

export const authenticate = async () => {
  const accessCode = await exchangeNpssoForCode(npsso);
  return await exchangeCodeForAccessToken(accessCode);
};
