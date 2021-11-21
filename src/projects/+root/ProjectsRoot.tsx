import type { VFC } from "react";
import { FaPlaystation, FaReact } from "react-icons/fa";
import { GiRetroController } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";

import { Animate } from "@/core/components/Animate";

import { ProjectCard } from "../ProjectCard";

export const ProjectsRoot: VFC = () => {
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
          <ProjectCard
            name="This Website"
            description="You're here now!"
            IconComponent={FaReact}
          />

          <ProjectCard
            name="psn-api"
            description="Get trophy, user, and game data from the PlayStation Network."
            IconComponent={FaPlaystation}
          />

          <ProjectCard
            name="retroachievements-js"
            description="A universal JavaScript wrapper for the RetroAchievements PHP API."
            IconComponent={GiRetroController}
          />

          <ProjectCard
            name="kongtrac.kr"
            description="Donkey Kong scores, players, and events archive+analysis. 1982 - Present."
            IconComponent={ImStatsDots}
          />
        </div>
      </Animate.FadeUp>
    </>
  );
};
