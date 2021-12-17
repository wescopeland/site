export interface XboxNewAchievement {
  id: number;
  name: string;
  isSecret: boolean;
  description: string;
  lockedDescription: string;
  isRevoked: boolean;

  serviceConfigId: string;
  progressState: string;

  titleAssociations: Array<{
    name: string;
    id: number;
  }>;

  progression: {
    requirements: Array<{
      id: string;
      current: number;
      target: number;
      operationType: string;
      valueType: string;
      ruleParticipationType: string;
    }>;
    timeUnlocked?: string;
  };

  mediaAssets: Array<{
    name: string;
    type: string;
    url: string;
  }>;

  platforms: string[];
  productId: string;
  achievementType: string;
  participationType: string;
  timeWindow: any;

  rewards: Array<{
    name: any;
    description: any;
    value: number;
    type: string;
    mediaAsset: any;
    valueType: string;
  }>;

  estimatedTime: string;
  deeplink: any;

  rarity?: {
    currentCategory: string;
    currentPercentage: number;
  };
}
