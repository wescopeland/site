import type { IconType } from "react-icons";

import type { TechStackElement } from "./tech-stack-element.model";

export interface ProjectListElement {
  name: string;
  description: string;
  iconComponent: IconType;
  techStackItems: TechStackElement[];

  githubRepo?: string;
  websiteUrl?: string;
}
