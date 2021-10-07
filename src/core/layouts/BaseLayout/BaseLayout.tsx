import type { FC } from "react";

export const BaseLayout: FC = ({ children }) => {
  return <div className="antialiased">{children}</div>;
};
