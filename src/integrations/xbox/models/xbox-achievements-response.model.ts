export interface XboxAchievementsResponse<T> {
  achievements: T[];
  pagingInfo: {
    continuationToken: string;
    totalRecords: number;
  };
  version?: string;
}
