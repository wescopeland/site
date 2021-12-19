import type { FC } from "react";
import {
  Context,
  createContext,
  useContextSelector
} from "use-context-selector";

import type { GamingState } from "../models";

const GamingContext = createContext<GamingState | null>(null);

interface GamingStateProviderProps {
  value: GamingState;
}

export const GamingStateProvider: FC<GamingStateProviderProps> = ({
  children,
  value
}) => {
  return (
    <GamingContext.Provider value={value}>{children}</GamingContext.Provider>
  );
};

export function useGamingContextSelector<Selected>(
  selector: (state: GamingState) => Selected
) {
  return useContextSelector(GamingContext as Context<GamingState>, selector);
}
