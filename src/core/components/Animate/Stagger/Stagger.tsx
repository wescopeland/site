import type { FC } from "react";
import { Children } from "react";

import type { BaseAnimationProps } from "../BaseAnimation";
import { BaseAnimation } from "../BaseAnimation";

type StaggerProps = Pick<
  BaseAnimationProps,
  "canShow" | "delay" | "shouldAnimateOnMount"
>;

export const Stagger: FC<StaggerProps> = ({
  children,
  canShow,
  delay,
  shouldAnimateOnMount
}) => {
  return (
    <>
      {Children.map(children, (child, index) => {
        return (
          <BaseAnimation
            canShow={canShow}
            shouldAnimateOnMount={shouldAnimateOnMount}
            delay={delay}
            enter="transition transform duration-300"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            style={{ transitionDelay: `${delay + index * 30}ms` }}
          >
            {child}
          </BaseAnimation>
        );
      })}
    </>
  );
};
