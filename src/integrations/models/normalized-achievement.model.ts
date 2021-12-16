import { TrophyType } from "psn-api";

export interface NormalizedAchievement {
  description: string | null;
  earnedDateTime: string | null;
  earnedRate: number | null;
  earnedPoints: number | null;
  gameName: string;
  groupId: string | null;
  iconUrl: string | null;
  isEarned: boolean;
  name: string;
  points: number;
  rarity: "Very Rare" | "Ultra Rare" | "Rare" | "Common" | null;
  service: "psn" | "xbox" | "ra";
  type: TrophyType | null;
}
