import type { FC } from "react";
import { useMemo } from "react";

import { Footer } from "@/core/components/Footer";
import type { TrophyMetaProps } from "@/core/components/TrophyMeta";

import type { BaseLayoutContextValue } from "./base-layout.context";
import { BaseLayoutContext } from "./base-layout.context";

export interface BaseLayoutProps {
  mostRecentTrophy: TrophyMetaProps;
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  mostRecentTrophy
}) => {
  const contextValue = useMemo(
    (): BaseLayoutContextValue => ({
      mostRecentTrophy
    }),
    [mostRecentTrophy]
  );

  return (
    <BaseLayoutContext.Provider value={contextValue}>
      <div className="antialiased">{children}</div>

      <Footer />
    </BaseLayoutContext.Provider>
  );
};
