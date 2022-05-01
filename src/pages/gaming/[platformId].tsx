import type { ReactElement } from "react";

import { BaseLayout } from "@/common/layouts/BaseLayout";
import type { AppPage } from "@/common/models";
import { GamingServiceRoot } from "@/gaming-service/components/+root";

const GamingServicePage: AppPage = () => <GamingServiceRoot />;

GamingServicePage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default GamingServicePage;
