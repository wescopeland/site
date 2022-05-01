import "@/common/styles/globals.css";
import "@/common/styles/prism-theme.css";

import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "next-themes";

import type { AppPage } from "@/common/models";

type AppPropsWithLayout = AppProps & {
  Component: AppPage;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <PlausibleProvider domain="wescopeland.dev">
      <ThemeProvider attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </PlausibleProvider>
  );
};

export default MyApp;
