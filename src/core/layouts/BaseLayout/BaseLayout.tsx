import type { FC } from "react";
import { SEO } from "@/core/components/SEO";

export const BaseLayout: FC = ({ children }) => {
  return (
    <>
      <div className="antialiased">{children}</div>
    </>
  );
};
