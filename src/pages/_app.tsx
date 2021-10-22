import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import type { AppPage } from "@/core/models";

type AppPropsWithLayout = AppProps & {
  Component: AppPage;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default MyApp;
