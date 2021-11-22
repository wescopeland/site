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
    setOpenedProject(projectsList.find((p) => p.name === projectName));
    setIsDialogOpen(true);
  };

  const handleProjectDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl mb-2 font-bold tracking-tight">
          Side-projects
        </h1>
        <p>Ordered by most recent.</p>
      </div>

      <Animate.FadeUp shouldAnimateOnMount>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              IconComponent={project.iconComponent}
              onClick={handleProjectCardClick}
            />
          ))}
        </div>
      </Animate.FadeUp>

      <ProjectDialog
        project={openedProject}
        isOpen={isDialogOpen}
        onClose={handleProjectDialogClose}
      />
    </>
  );
};
