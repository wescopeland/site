const convertNumberToHexString = (inputNumber: number) => {
  return inputNumber.toString(16).toUpperCase();
};

export const deriveImageUrlFromLegacyAchievement = (
  legacyTitleId: number,
  legacyAchievementImageId: number
) => {
  const hexLegacyTitleId = convertNumberToHexString(legacyTitleId);
  const hexLegacyAchievementImageId = convertNumberToHexString(
    legacyAchievementImageId
  );

  return `http://image.xboxlive.com/global/t.${hexLegacyTitleId}/ach/0/${hexLegacyAchievementImageId}`;
};
