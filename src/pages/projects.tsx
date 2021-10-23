import type { ReactElement } from "react";

import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { ProjectsRoot } from "@/projects/components/+root";
import { getGlobalAchievementMetadata } from "@/queries/getGlobalAchievementMetadata";

const ProjectsPage: AppPage = () => <ProjectsRoot />;

ProjectsPage.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout
      seo={page.props.seo}
      gamingMetadata={page.props.layout.gamingMetadata}
    >
      {page}
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const globalAchievementMetadata = await getGlobalAchievementMetadata();

  return {
    props: {
      layout: {
        gamingMetadata: globalAchievementMetadata
      },
      seo: {
        pageTitle: "Projects"
      }
    },
    revalidate: 60 * 60 // Once an hour
  };
}

export default ProjectsPage;
