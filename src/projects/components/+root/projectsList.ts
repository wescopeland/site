import { FaPlaystation, FaReact } from "react-icons/fa";
import { GiRetroController } from "react-icons/gi";
import { GrDocumentPerformance } from "react-icons/gr";
import { HiOutlineDocumentReport, HiOutlineSearch } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";

import type { ProjectListElement } from "@/projects/models";

export const projectsList: ProjectListElement[] = [
  {
    name: "This Website",
    description: "You're here now!",
    iconComponent: FaReact,
    githubRepo: "wescopeland/blog"
  },
  {
    name: "psn-api",
    description:
      "Get trophy, user, and game data from the PlayStation Network.",
    iconComponent: FaPlaystation,
    githubRepo: "achievements-app/psn-api"
  },
  {
    name: "retroachievements-js",
    description:
      "A universal JavaScript wrapper for the RetroAchievements PHP API.",
    iconComponent: GiRetroController,
    githubRepo: "achievements-app/retroachievements-js"
  },
  {
    name: "ScoreSplit",
    description:
      "Easily track if a live game of Donkey Kong will break the world record.",
    iconComponent: HiOutlineDocumentReport,
    githubRepo: "wescopeland/scoresplit-react"
  },
  {
    name: "GitHub User Search",
    description:
      "Search for GitHub users. Powered by Angular, Akita, and GraphQL.",
    iconComponent: HiOutlineSearch,
    githubRepo: "wescopeland/this-dot-exercise"
  },
  {
    name: "kongtrac.kr",
    description:
      "Donkey Kong scores, players, and events archive+analysis. 1982 - Present.",
    iconComponent: ImStatsDots,
    githubRepo: "wescopeland/kongtrac.kr"
  }
];
