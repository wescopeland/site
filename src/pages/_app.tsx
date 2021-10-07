import "@/styles/globals.css";

import type { AppProps } from "next/app";

import type { AppPage } from "@/core/models";

type AppPropsWithLayout = AppProps & {
  Component: AppPage;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
