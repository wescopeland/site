import type {
  NormalizedAchievement,
  NormalizedGame
} from "@/integrations/models";

import type {
  AchievementsAppAchievement,
  FetchAllAchievementsAppGamesResponse
} from "../models";

export const normalizeAchievementsAppGamesResponse = (
  achievementsAppGamesResponse: FetchAllAchievementsAppGamesResponse
): NormalizedGame[] => {
  const normalizedGames: NormalizedGame[] = [];

  for (const serviceGames of Object.values(achievementsAppGamesResponse)) {
    for (const serviceGame of serviceGames) {
      normalizedGames.push({
        achievements: normalizeAchievementsAppAchievements(
          serviceGame.achievements
        ),
        iconUrl: serviceGame.imageUrl,
        completedOn: serviceGame.completedOn ?? null,
        lastEarnedOn: serviceGame.lastEarnedOn ?? null,
        name: serviceGame.name,
        platform:
          serviceGame.platforms.length > 0
            ? serviceGame.platforms[serviceGame.platforms.length - 1]
            : "",
        service: serviceGame.gamingService.toLowerCase() as any,
        trophyTypeCounts:
          serviceGame.gamingService === "PSN"
            ? (serviceGame.gameTrophyTypeCounts as any)
            : null,
        earnedCounts:
          serviceGame.gamingService === "PSN"
            ? (serviceGame.userEarnedTrophyTypeCounts as any)
            : null
        // TODO: completionRate
      });
    }
  }

  return normalizedGames;
};

const normalizeAchievementsAppAchievements = (
  achievementsAppAchievements: AchievementsAppAchievement[]
): NormalizedAchievement[] => {
  return achievementsAppAchievements.map((achievement) => {
    const points =
      achievement.gamingService === "PSN"
        ? convertTrophyTypeToPoints(achievement.psnTrophyKind as any)
        : achievement.points ?? 0;

    return {
      description: achievement.description,
      earnedDateTime: achievement.earnedOn ?? null,
      earnedRate: achievement.earnedRate ?? null,
      earnedPoints: achievement.isEarned ? points : null,
      gameName: achievement.gameName,
      groupId: achievement.psnGroupId ?? null,
      iconUrl: achievement.iconUrl,
      isEarned: achievement.isEarned,
      name: achievement.name,
      points,
      rarity: null, // TODO
      service: achievement.gamingService.toLowerCase() as any,
      type:
        achievement.gamingService === "PSN"
          ? (achievement.psnTrophyKind as any)
          : null
    };
  });
};

const convertTrophyTypeToPoints = (
  trophyType: "bronze" | "silver" | "gold" | "platinum"
) => {
  let points = 0;
  if (trophyType === "bronze") {
    points = 15;
  } else if (trophyType === "silver") {
    points = 30;
  } else if (trophyType === "gold") {
    points = 60;
  } else if (trophyType === "platinum") {
    points = 300;
  }

  return points;
};
