import cc from "classcat";
import type { VFC } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  repoUrl: string;
}

export const ProjectCard: VFC<ProjectCardProps> = ({
  name,
  description,
  repoUrl
}) => {
  return (
    <a
      href={repoUrl}
      target="_blank"
      className={cc([
        "p-4 transition cursor-pointer select-none",
        "border border-gray-200",
        "text-black dark:text-white",
        "shadow hover:-translate-y-1 hover:shadow-lg",
        "hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:border-gray-200 hover:border-gray-600 hover:no-underline"
      ])}
    >
      <p className="font-bold">{name}</p>
      <p className="font-normal">{description}</p>
    </a>
  );
};
