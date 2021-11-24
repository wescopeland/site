import type { IconType } from "react-icons";

import type { TechStackElement } from "./tech-stack-element.model";

export interface ProjectListElement {
  name: string;
  description: string;
  iconComponent: IconType;
  githubRepo: string;
  techStackItems: TechStackElement[];

  websiteUrl?: string;
}
