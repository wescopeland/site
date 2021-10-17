import type { FC } from "react";
import { Footer } from "@/core/components/Footer";
import { useMemo } from "react";
import { BaseLayoutContext } from "./base-layout.context";
import type { BaseLayoutContextValue } from "./base-layout.context";
import type { TrophyMetaProps } from "@/core/components/TrophyMeta";

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
