import cc from "classcat";
import type { VFC } from "react";
import type { IconType } from "react-icons";

interface ProjectCardProps {
  IconComponent: IconType;
  name: string;
  description: string;
  onClick: (projectName: string) => any;
}

export const ProjectCard: VFC<ProjectCardProps> = ({
  IconComponent,
  name,
  description,
  onClick
}) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={cc([
        "h-20 md:h-24 py-2 px-4",
        "rounded border-2",
        "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-500",
        "hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-200",
        "flex items-center transition duration-50 select-none cursor-pointer",
        "transition sm:active:scale-95"
      ])}
    >
      <div className="mr-4">
        <IconComponent className="h-full text-4xl text-gray-500 dark:text-gray-400" />
      </div>

      <div className="text-left text-black dark:text-white">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{description}</p>
      </div>
    </button>
  );
};
