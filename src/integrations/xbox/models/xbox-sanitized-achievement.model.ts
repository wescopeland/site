export interface XboxSanitizedAchievement {
  id: number;
  name: string;
  isSecret: boolean;
  lockedDescription: string;
  isRevoked: boolean;
  unlocked: boolean;
  gamerScore: number;
  iconUrl?: string;
  timeUnlocked?: string;
  earnedRate?: number;
}
