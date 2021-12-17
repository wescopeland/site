export interface XboxTitleHistoryElement {
  titleId: string;
  pfn: string;
  bingId: string;
  serviceConfigId?: string;
  windowsPhoneProductId: string;
  name: string;
  type: string;
  devices: string[];
  displayImage: string;
  mediaItemType: string;
  modernTitleId: string;
  isBundle: boolean;

  achievement: {
    currentAchievements: number;
    totalAchievements: number;
    currentGamerscore: number;
    totalGamerscore: number;
    progressPercentage: number;
    sourceVersion: number;
  };

  stats: any;
  gamePass: any;

  images: {
    url: string;
    type: string;
  }[];

  titleHistory: {
    lastTimePlayed: string;
    visible: boolean;
    canHide: boolean;
  };

  detail: any;
  friendsWhoPlayed: any;
  alternateTitleIds: any;
  contentBoards: any;
  xboxLiveTier: string;
}
