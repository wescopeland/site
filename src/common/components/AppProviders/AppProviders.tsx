import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "next-themes";
import type { FC, ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <PlausibleProvider domain="wescopeland.dev">
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </PlausibleProvider>
  );
};
