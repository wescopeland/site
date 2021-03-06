import cc from "classcat";
import type { FC } from "react";

import { Animate } from "@/common/components/Animate";
import type { TechStackElement } from "@/projects/models";

interface TechStackProps {
  techStackElements: TechStackElement[];
}

export const TechStack: FC<TechStackProps> = ({ techStackElements }) => {
  return (
    <>
      <p className="mb-2 text-sm font-semibold">Tech stack</p>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <Animate.StaggerOnMount delay={50}>
          {techStackElements.map(({ label, IconComponent }) => (
            <li
              key={label}
              className={cc([
                "bg-gray-100 dark:bg-gray-800",
                "flex flex-col items-center",
                "rounded-full",
                "pt-3 pb-2 px-4"
              ])}
            >
              {IconComponent ? (
                <IconComponent className="flex justify-center w-full text-2xl text-gray-500 dark:text-gray-400" />
              ) : null}

              <span className="flex flex-col items-center mt-1 text-sm">
                {label}
              </span>
            </li>
          ))}
        </Animate.StaggerOnMount>
      </ul>
    </>
  );
};
