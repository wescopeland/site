import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { GamingRoot } from "@/gaming/components/+root";

const GamingPage: AppPage = () => <GamingRoot />;

GamingPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default GamingPage;
