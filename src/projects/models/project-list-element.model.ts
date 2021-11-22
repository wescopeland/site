import type { IconType } from "react-icons";

export interface ProjectListElement {
  name: string;
  description: string;
  iconComponent: IconType;
  githubRepo: string;
}
