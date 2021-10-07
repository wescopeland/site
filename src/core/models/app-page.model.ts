import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type AppPage = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
