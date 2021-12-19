import { call as xblCall } from "@xboxreplay/xboxlive-api";
import urlcat from "urlcat";

import {
  AchievementSchemaVersion,
  XboxAchievementsResponse,
  XboxNewAchievement,
  XboxOldAchievement,
  XboxSanitizedAchievement,
  XboxTitleHistoryElement
} from "../models";
import { deriveImageUrlFromLegacyAchievement } from "../utils/deriveImageUrlFromLegacyAchievement";
import { mergeLegacyAchievements } from "../utils/mergeLegacyAchievements";
import { sanitizeXboxAchievement } from "../utils/sanitizeXboxAchievement";

async function getAllUserModernAchievementsStatusByTitle(options: {
  titleId: string;
  xuid: string;
  xstsToken: string;
  userHash: string;
}) {
  const { titleId, xuid, xstsToken, userHash } = options;
  const baseApiUrl = "https://achievements.xboxlive.com";

  const requestUrl = urlcat(baseApiUrl, "/users/xuid(:xuid)/achievements", {
    xuid,
    titleId,
    maxItems: 1000
  });

  // This will give us the complete list of achievements and
  // whether or not we've earned them for the given title.
  const { achievements } = await xblCall<
    XboxAchievementsResponse<XboxNewAchievement>
  >(
    { url: requestUrl, method: "GET" },
    { XSTSToken: xstsToken, userHash },
    AchievementSchemaVersion.ModernWithRarities
  );

  return achievements;
}

async function getAllUserLegacyAchievementsStatusByTitle(options: {
  titleId: string;
  xuid: string;
  xstsToken: string;
  userHash: string;
}): Promise<XboxOldAchievement[]> {
  const { titleId, xuid, xstsToken, userHash } = options;
  const baseApiUrl = "https://achievements.xboxlive.com";

  // Getting the achievements status for Xbox 360 games requires
  // two API calls. First, we must get the complete list of
  // achievements for a game. Next, we must get the list of
  // achievements the user has unlocked for the game.
  const allAchievementsRequestUrl = urlcat(
    baseApiUrl,
    "/users/xuid(:xuid)/titleachievements",
    {
      xuid,
      titleId,
      maxItems: 1000
    }
  );

  const unlockedAchievementsRequestUrl = urlcat(
    baseApiUrl,
    "/users/xuid(:xuid)/achievements",
    {
      xuid,
      titleId,
      maxItems: 1000
    }
  );

  const { achievements: allAchievements } = await xblCall<
    XboxAchievementsResponse<XboxOldAchievement>
  >(
    { url: allAchievementsRequestUrl, method: "GET" },
    { XSTSToken: xstsToken, userHash },
    AchievementSchemaVersion.LegacyWithRarities
  );

  const { achievements: unlockedAchievements } = await xblCall<
    XboxAchievementsResponse<XboxOldAchievement>
  >(
    { url: unlockedAchievementsRequestUrl, method: "GET" },
    { XSTSToken: xstsToken, userHash },
    AchievementSchemaVersion.LegacyWithRarities
  );

  // Now that we have both sets of achievements, we must
  // merge the user's unlocked achievements with the list of all
  // achievements. This will give us the accurate status
  // of each achievement for both the game and current user.
  const mergedLegacyAchievements = mergeLegacyAchievements({
    allAchievements,
    unlockedAchievements
  });

  // We need to be sure to derive/generate the achievement image URLs.
  return mergedLegacyAchievements.map((legacyAchievement) => ({
    ...legacyAchievement,
    imageUnlocked: deriveImageUrlFromLegacyAchievement(
      Number(titleId),
      legacyAchievement.imageId
    )
  }));
}

export async function fetchXuidAchievementsByTitle(options: {
  title: XboxTitleHistoryElement;
  xuid: string;
  xstsToken: string;
  userHash: string;
}) {
  const { title, xuid, xstsToken, userHash } = options;
  let achievements: XboxSanitizedAchievement[] = [];

  // For XBL achievements, we have to use a different endpoint based
  // on the platform. Xbox 360 games have a different schema from
  // Xbox One, Xbox Series, and PC games.
  if (title.devices.includes("Xbox360")) {
    // Legacy URI (Xbox 360)
    try {
      const legacyAchievements =
        await getAllUserLegacyAchievementsStatusByTitle({
          xuid,
          xstsToken,
          userHash,
          titleId: title.titleId
        });

      achievements = legacyAchievements.map(sanitizeXboxAchievement);
    } catch (error) {
      console.error(
        `XBL Integration: There was a problem retrieving legacy achievements for ${title.name} ${title.titleId}.`,
        error
      );
    }
  } else {
    // Modern URI (PC, Xbox One, Xbox Series)
    try {
      const modernAchievements =
        await getAllUserModernAchievementsStatusByTitle({
          xuid,
          xstsToken,
          userHash,
          titleId: title.titleId
        });

      achievements = modernAchievements.map(sanitizeXboxAchievement);
    } catch (error) {
      console.error(
        `Xbox Integration: There was a problem retrieving modern achievements for ${title.name} ${title.titleId}.`,
        error
      );
    }
  }

  return achievements;
}
