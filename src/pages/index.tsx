import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { HomeRoot } from "@/home/+root";

const HomePage: AppPage = () => <HomeRoot />;

HomePage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default HomePage;
