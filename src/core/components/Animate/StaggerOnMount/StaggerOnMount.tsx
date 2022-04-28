import cc from "classcat";
import type { FC, ReactNode } from "react";
import { Children, cloneElement } from "react";
import { useTimeout } from "react-use";

interface StaggerOnMountProps {
  children?: ReactNode;
  delay?: number;
}

export const StaggerOnMount: FC<StaggerOnMountProps> = ({
  children,
  delay
}) => {
  return (
    <>
      {Children.map(children, (child, index) => {
        return (
          <StaggerChild
            child={child as any}
            childIndex={index}
            initialDelay={delay}
          />
        );
      })}
    </>
  );
};

interface StaggerChildProps {
  child: ReactNode & { props: any };
  childIndex: number;

  initialDelay?: number;
}

const StaggerChild: FC<StaggerChildProps> = ({
  child,
  childIndex,
  initialDelay
}) => {
  const [isReady] = useTimeout((initialDelay ?? 0) + childIndex * 30);

  let mutatedChild = child;
  if (child?.props?.className) {
    mutatedChild = cloneElement(child as any, {
      ...child.props,
      className: undefined
    });
  }

  return (
    <div
      className={cc([
        isReady() ? "animate-fade-up" : "opacity-0",
        child?.props?.className
      ])}
    >
      {mutatedChild}
    </div>
  );
};
