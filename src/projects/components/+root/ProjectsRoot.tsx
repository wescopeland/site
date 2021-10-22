import type { VFC } from "react";

import { ProjectCard } from "@/projects/components/ProjectCard";

export const ProjectsRoot: VFC = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-1 text-4xl font-bold tracking-tight">
          My side-projects
        </h1>

        <p>(from newest to oldest)</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <ProjectCard
          name="This website"
          description="My personal corner of the internet. You're looking at it now!"
          repoUrl="https://github.com/wescopeland/blog"
        />

        <ProjectCard
          name="PSN API"
          description="A low-level API for getting trophy data from the PlayStation Network."
          repoUrl="https://github.com/achievements-app/psn-api"
        />

        <ProjectCard
          name="retroachievements-js"
          description="A universal JavaScript wrapper for the RetroAchievements PHP API."
          repoUrl="https://github.com/achievements-app/retroachievements-js"
        />

        <ProjectCard
          name="kongtrac.kr"
          description="Donkey Kong scores, players, and events archive+analysis. 1982 – Present."
          repoUrl="https://github.com/wescopeland/kongtrac.kr"
        />
      </div>
    </>
  );
};
