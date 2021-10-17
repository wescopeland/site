import { exchangeCodeForAccessToken, exchangeNpssoForCode } from "psn-api";

const myNpsso = process.env.PSN_NPSSO ?? "";

export const authenticate = async () => {
  const accessCode = await exchangeNpssoForCode(myNpsso);
  return await exchangeCodeForAccessToken(accessCode);
};
