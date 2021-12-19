export const mapPercentageToRarity = (percentage: number) => {
  let rarity = "Common";

  if (percentage >= 0 && percentage < 5) {
    rarity = "Ultra rare";
  } else if (percentage >= 5 && percentage < 10) {
    rarity = "Very rare";
  } else if (percentage >= 10 && percentage < 20) {
    rarity = "Rare";
  } else if (percentage >= 20 && percentage < 50) {
    rarity = "Uncommon";
  }

  return rarity;
};
