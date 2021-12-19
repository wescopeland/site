import type { VFC } from "react";
import { useState } from "react";

import { Animate } from "@/core/components/Animate";
import type { ProjectListElement } from "@/projects/models";

import { ProjectCard } from "../ProjectCard";
import { ProjectDialog } from "../ProjectDialog";
import { projectsList } from "./projectsList";

export const ProjectsRoot: VFC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openedProject, setOpenedProject] = useState<ProjectListElement>(
    projectsList[0]
  );

  const handleProjectCardClick = (projectName: string) => {
    const foundProject = projectsList.find((p) => p.name === projectName);

    if (foundProject) {
      setOpenedProject(foundProject);
      setIsDialogOpen(true);
    }
  };

  const handleProjectDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Animate.FadeUpOnMount>
        <div className="mb-10">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            Side-projects
          </h1>
          <p>Ordered by most recent.</p>
        </div>
      </Animate.FadeUpOnMount>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <Animate.StaggerOnMount delay={100}>
          {projectsList.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              IconComponent={project.iconComponent}
              onClick={handleProjectCardClick}
            />
          ))}
        </Animate.StaggerOnMount>
      </div>

      <ProjectDialog
        project={openedProject}
        isOpen={isDialogOpen}
        onClose={handleProjectDialogClose}
      />
    </>
  );
};
