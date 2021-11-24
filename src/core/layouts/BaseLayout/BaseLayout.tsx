import cc from "classcat";
import type { FC } from "react";

import { AppBar } from "@/core/components/AppBar";
import { SEO } from "@/core/components/SEO";

import { Gradient } from "./Gradient";

export const BaseLayout: FC = ({ children }) => {
  return (
    <>
      <SEO />

      <div className="min-h-screen">
        <AppBar />
        <main
          className={cc([
            "container max-w-[800px] lg:max-w-[870px]",
            "px-4 pt-8 sm:pt-16 mx-auto mb-32"
          ])}
        >
          {children}
        </main>
        <Gradient />
      </div>
    </>
  );
};
