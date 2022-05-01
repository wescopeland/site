import type { ReactElement } from "react";

import { BaseLayout } from "@/common/layouts/BaseLayout";
import type { AppPage } from "@/common/models";
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
