import type { FC, ReactNode } from "react";

interface H1Props {
  children?: ReactNode;
}

export const H1: FC<H1Props> = ({ children }) => {
  return (
    <div className="mb-10">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">{children}</h1>
    </div>
  );
};
