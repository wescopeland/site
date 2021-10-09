import type { FC } from "react";
import { Footer } from "@/core/components/Footer";

export const BaseLayout: FC = ({ children }) => {
  return (
    <>
      <div className="antialiased">{children}</div>
      <Footer />
    </>
  );
};
