import "@/core/styles/globals.css";
import "@/core/styles/prism-theme.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";

import type { AppPage } from "@/core/models";
import { fetcher } from "@/core/utils/fetcher";

type AppPropsWithLayout = AppProps & {
  Component: AppPage;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SWRConfig>
  );
};

export default MyApp;
