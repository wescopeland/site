import {
  XboxNewAchievement,
  XboxOldAchievement,
  XboxSanitizedAchievement
} from "../models";

// Xbox achievements come in a modern and legacy flavor.
// We don't want to juggle multiple achievement interfaces.
// This util consumes all flavors of Xbox achievements, and
// distills them down to just the props we need.
export const sanitizeXboxAchievement = (
  originalAchievement: XboxOldAchievement & XboxNewAchievement
): XboxSanitizedAchievement => {
  const getIconUrl = () => {
    // Legacy format.
    // TODO: This only works if we make the request through XAPI.
    if (originalAchievement.imageUnlocked) {
      return decodeURI(originalAchievement.imageUnlocked);
    }

    // Modern format.
    if (originalAchievement.mediaAssets) {
      const foundIcon = originalAchievement.mediaAssets.find(
        (asset) => asset.type === "Icon"
      );

      if (foundIcon) {
        return foundIcon.url;
      }
    }
  };

  return {
    id: Number(originalAchievement.id),
    name: originalAchievement.name,
    isSecret: originalAchievement.isSecret,
    lockedDescription: originalAchievement.lockedDescription,
    isRevoked: originalAchievement.isRevoked,
    iconUrl: getIconUrl(),

    gamerScore:
      Number(
        originalAchievement.rewards?.find(
          (reward) => reward.type === "Gamerscore"
        )?.value
      ) ||
      originalAchievement.gamerscore ||
      0,

    timeUnlocked:
      originalAchievement?.progression?.timeUnlocked ||
      originalAchievement?.timeUnlocked ||
      undefined,

    unlocked:
      originalAchievement.progressState === "Achieved" ||
      originalAchievement.unlocked ||
      false,

    earnedRate: originalAchievement.rarity?.currentPercentage || undefined
  };
};
