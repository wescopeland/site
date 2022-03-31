import { FaPlaystation, FaReact } from "react-icons/fa";
import { GiRetroController, GiSattelite } from "react-icons/gi";
import { HiOutlineDocumentReport, HiOutlineSearch } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { MdOutlineFindInPage } from "react-icons/md";
import {
  SiAlgolia,
  SiAngular,
  SiAngularjs,
  SiAngularuniversal,
  SiApollographql,
  SiCypress,
  SiEthereum,
  SiFirebase,
  SiGithubactions,
  SiHeroku,
  SiJest,
  SiMaterialdesign,
  SiMaterialui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNx,
  SiPwa,
  SiRailway,
  SiRedux,
  SiRollupdotjs,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

import type { ProjectListElement } from "@/projects/models";

export const projectsList: ProjectListElement[] = [
  {
    name: "Hubble Bots",
    description:
      "Provides analytics in the DeFi-oriented Hubble Protocol Discord server.",
    iconComponent: GiSattelite,
    techStackItems: [
      { label: "NestJS", IconComponent: SiNestjs },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "Nrwl Nx", IconComponent: SiNx },
      { label: "Railway", IconComponent: SiRailway }
    ],
    githubRepo: "wescopeland/hubble-bots"
  },
  {
    name: "crypto-portfolio",
    description:
      "Tracks token price and wallet values across five different blockchains.",
    iconComponent: SiEthereum,
    techStackItems: [
      { label: "NestJS", IconComponent: SiNestjs },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "Nrwl Nx", IconComponent: SiNx },
      { label: "Railway", IconComponent: SiRailway }
    ]
  },
  {
    name: "This Website",
    description: "You're here now!",
    iconComponent: FaReact,
    githubRepo: "wescopeland/site",
    techStackItems: [
      { label: "Next.js", IconComponent: SiNextdotjs },
      { label: "React", IconComponent: FaReact },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "Tailwind", IconComponent: SiTailwindcss }
    ]
  },
  {
    name: "psn-api",
    description:
      "Get trophy, user, and game data from the PlayStation Network.",
    iconComponent: FaPlaystation,
    githubRepo: "achievements-app/psn-api",
    websiteUrl: "https://psn-api.achievements.app",
    techStackItems: [
      { label: "Node.js", IconComponent: SiNodedotjs },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "Docusaurus", IconComponent: MdOutlineFindInPage },
      { label: "Cypress", IconComponent: SiCypress }
    ]
  },
  {
    name: "retroachievements-js",
    description:
      "A universal JavaScript wrapper for the RetroAchievements PHP API.",
    iconComponent: GiRetroController,
    githubRepo: "achievements-app/retroachievements-js",
    techStackItems: [
      { label: "Node.js", IconComponent: SiNodedotjs },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "Rollup", IconComponent: SiRollupdotjs },
      { label: "GH Actions", IconComponent: SiGithubactions }
    ]
  },
  {
    name: "ScoreSplit",
    description:
      "Easily track if a live game of Donkey Kong will break the world record.",
    iconComponent: HiOutlineDocumentReport,
    githubRepo: "wescopeland/scoresplit-react",
    websiteUrl: "https://scoresplit-react.vercel.app/",
    techStackItems: [
      { label: "React", IconComponent: FaReact },
      { label: "Redux", IconComponent: SiRedux },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "MUI", IconComponent: SiMaterialui }
    ]
  },
  {
    name: "GitHub User Search",
    description:
      "Search for GitHub users. Powered by Angular, Akita, and GraphQL.",
    iconComponent: HiOutlineSearch,
    githubRepo: "wescopeland/this-dot-exercise",
    websiteUrl: "https://this-dot-exercise.herokuapp.com/",
    techStackItems: [
      { label: "Angular 2+", IconComponent: SiAngular },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "Angular PWA", IconComponent: SiPwa },
      { label: "Angular Universal", IconComponent: SiAngularuniversal },
      { label: "Angular Material", IconComponent: SiMaterialdesign },
      { label: "Apollo Client", IconComponent: SiApollographql },
      { label: "Jest", IconComponent: SiJest },
      { label: "Heroku", IconComponent: SiHeroku }
    ]
  },
  {
    name: "kongtrac.kr",
    description:
      "Donkey Kong scores, players, and events archive+analysis. 1982 - Present.",
    iconComponent: ImStatsDots,
    githubRepo: "wescopeland/kongtrac.kr",
    websiteUrl: "https://www.kongtrac.kr",
    techStackItems: [
      { label: "Angular 2+", IconComponent: SiAngular },
      { label: "Angular 1.x", IconComponent: SiAngularjs },
      { label: "TypeScript", IconComponent: SiTypescript },
      { label: "Angular Material", IconComponent: SiMaterialdesign },
      { label: "Akita", IconComponent: SiRedux },
      { label: "Firebase RTDB", IconComponent: SiFirebase },
      { label: "Algolia", IconComponent: SiAlgolia },
      { label: "Heroku", IconComponent: SiHeroku }
    ]
  }
];
