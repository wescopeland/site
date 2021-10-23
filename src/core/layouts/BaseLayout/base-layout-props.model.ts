import type { Trophy } from "psn-api";

import type { SEOProps } from "@/core/components/SEO";

export interface BaseLayoutProps {
  gamingMetadata: {
    mostRecentTrophy: Trophy & { gameName: string };
  };

  seo?: Partial<SEOProps>;
}
