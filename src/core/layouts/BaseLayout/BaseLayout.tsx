import type { FC } from "react";

import { Footer } from "@/core/components/Footer";

import { BaseLayoutContext } from "./base-layout.context";
import type { BaseLayoutProps } from "./base-layout-props.model";

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  gamingMetadata
}) => {
  const contextValue = { gamingMetadata };

  return (
    <BaseLayoutContext.Provider value={contextValue}>
      <div className="px-8">
        <div className="antialiased">{children}</div>

        <Footer />
      </div>
    </BaseLayoutContext.Provider>
  );
};
