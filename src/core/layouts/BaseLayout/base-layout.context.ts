import { createContext, useContext } from "react";
import type { BaseLayoutProps } from "./BaseLayout";

export type BaseLayoutContextValue = BaseLayoutProps | null;

export const BaseLayoutContext = createContext<BaseLayoutContextValue>(null);

export function useBaseLayoutContext() {
  const context = useContext(BaseLayoutContext);

  if (!context) {
    throw new Error(
      "useBaseLayoutContext can only be used from within the BaseLayout context."
    );
  }

  return context;
}
