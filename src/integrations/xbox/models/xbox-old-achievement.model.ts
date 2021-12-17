export interface XboxOldAchievement {
  id: number;
  name: string;
  isSecret: boolean;
  description: string;
  lockedDescription: string;
  isRevoked: boolean;
  sequence: number;
  flags: number;
  unlockedOnline: boolean;
  unlocked: boolean;
  platform: number;
  gamerscore: number;
  imageId: number;
  type: number;
  timeUnlocked: string;

  imageUnlocked?: string;
  rarity?: {
    currentCategory: string;
    currentPercentage: number;
  };
}
