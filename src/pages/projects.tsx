import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { ProjectsRoot } from "@/projects/components/+root";

const ProjectsPage: AppPage = () => <ProjectsRoot />;

ProjectsPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ProjectsPage;
