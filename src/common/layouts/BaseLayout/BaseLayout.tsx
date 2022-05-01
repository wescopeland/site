import type { FC, ReactNode } from "react";

import { AppBar } from "@/common/components/AppBar";
import { SEO } from "@/common/components/SEO";

import { Gradient } from "./Gradient";

interface BaseLayoutProps {
  children?: ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <SEO />

      <div>
        <AppBar />

        <div className="container max-w-[800px] lg:max-w-[870px]">
          <main className="px-4 pt-8 mx-auto mb-32 sm:pt-16">{children}</main>
          {/* <AppFooter /> */}
        </div>

        <Gradient />
      </div>
    </>
  );
};
