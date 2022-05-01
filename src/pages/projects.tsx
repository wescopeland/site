import type { ReactElement } from "react";

import { BaseLayout } from "@/common/layouts/BaseLayout";
import type { AppPage } from "@/common/models";
import { ProjectsRoot } from "@/projects/components/+root";

const ProjectsPage: AppPage = () => <ProjectsRoot />;

ProjectsPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ProjectsPage;
