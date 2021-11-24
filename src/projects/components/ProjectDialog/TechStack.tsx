import cc from "classcat";
import type { VFC } from "react";

import { Animate } from "@/core/components/Animate";
import type { TechStackElement } from "@/projects/models";

interface TechStackProps {
  techStackElements: TechStackElement[];
}

export const TechStack: VFC<TechStackProps> = ({ techStackElements }) => {
  return (
    <>
      <p className="mb-2 text-sm font-semibold">Tech stack</p>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <Animate.Stagger shouldAnimateOnMount delay={50}>
          {techStackElements.map(({ label, IconComponent }) => (
            <li
              key={label}
              className={cc([
                "bg-gray-100 dark:bg-gray-800",
                "flex flex-col items-center justify-center",
                "rounded",
                "pt-3 pb-2 px-4"
              ])}
            >
              <IconComponent className="text-2xl text-gray-500 dark:text-gray-400" />
              <span className="mt-1 text-sm">{label}</span>
            </li>
          ))}
        </Animate.Stagger>
      </ul>
    </>
  );
};
