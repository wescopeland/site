import type { FC } from "react";

export const H1: FC = ({ children }) => {
  return (
    <div className="mb-10">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">{children}</h1>
    </div>
  );
};
