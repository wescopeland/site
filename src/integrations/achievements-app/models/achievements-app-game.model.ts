import type { AchievementsAppAchievement } from "./achievements-app-achievement.model";
import type { GamingService } from "./gaming-service.model";
import type { TrophyTypeCounts } from "./trophy-type-counts.model";

export interface AchievementsAppGame {
  name: string;
  platforms: string[];
  gamingService: GamingService;
  imageUrl: string;
  lastEarnedOn: string | null;

  achievements: AchievementsAppAchievement[];

  completedOn: string | null;
  gameTotalPossiblePoints?: number;
  gameTrophyTypeCounts?: TrophyTypeCounts;
  userEarnedTrophyTypeCounts?: TrophyTypeCounts;
}
