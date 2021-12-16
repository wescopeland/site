import { RetroAchievementsClient } from "retroachievements-js";

const userName = process.env.RA_USERNAME ?? "";
const apiKey = process.env.RA_API_KEY ?? "";

function initializeRaClient() {
  return new RetroAchievementsClient({
    userName,
    apiKey
  });
}

const client = initializeRaClient();
export default client;
