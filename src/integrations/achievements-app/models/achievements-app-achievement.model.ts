import type { GamingService } from "./gaming-service.model";

export interface AchievementsAppAchievement {
  isEarned: boolean;
  name: string;
  description: string;
  gameName: string;
  iconUrl: string;
  gamingService: GamingService;

  psnGroupId?: string;
  earnedRate?: number;
  points?: number;
  psnTrophyKind?: "bronze" | "silver" | "gold" | "platinum";
  earnedOn?: string;
}
