import type { Trophy } from "psn-api";

export interface BaseLayoutProps {
  gamingMetadata: {
    mostRecentTrophy: Trophy & { gameName: string };
  };
}
