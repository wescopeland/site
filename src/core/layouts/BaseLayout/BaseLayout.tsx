import type { FC } from "react";

import { Footer } from "@/core/components/Footer";
import { NavBar } from "@/core/components/NavBar";

import { BaseLayoutContext } from "./base-layout.context";
import type { BaseLayoutProps } from "./base-layout-props.model";

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  gamingMetadata
}) => {
  const contextValue = { gamingMetadata };

  return (
    <BaseLayoutContext.Provider value={contextValue}>
      <NavBar />

      <div className="container max-w-2xl px-8 pb-12 mx-auto">
        <main className="antialiased">{children}</main>

        <Footer />
      </div>
    </BaseLayoutContext.Provider>
  );
};
