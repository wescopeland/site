import "@/common/styles/globals.css";
import "@/common/styles/prism-theme.css";

import type { AppProps } from "next/app";

import { AppProviders } from "@/common/components/AppProviders";
import type { AppPage } from "@/common/models";

type AppPropsWithLayout = AppProps & {
  Component: AppPage;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return <AppProviders>{getLayout(<Component {...pageProps} />)}</AppProviders>;
};

export default MyApp;
