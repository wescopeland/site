import type { Trophy, TrophyTitle } from "psn-api";

interface FullGameMetadata extends TrophyTitle {
  trophies: Trophy[];
}

export type PsnProfile = FullGameMetadata[];
