import type { FC } from "react";

import { AppBar } from "@/core/components/AppBar";
import { AppFooter } from "@/core/components/AppFooter";
import { SEO } from "@/core/components/SEO";

import { Gradient } from "./Gradient";

export const BaseLayout: FC = ({ children }) => {
  return (
    <>
      <SEO />

      <div>
        <AppBar />

        <div className="container max-w-[800px] lg:max-w-[870px]">
          <main className="px-4 pt-8 sm:pt-16 mx-auto mb-32">{children}</main>
          <AppFooter />
        </div>

        <Gradient />
      </div>
    </>
  );
};
