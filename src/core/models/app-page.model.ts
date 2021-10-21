import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type AppPage<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
