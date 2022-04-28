import type { FC, ReactNode } from "react";
import { useInView } from "react-cool-inview";

interface LoadOnVisibleProps {
  children: ReactNode;
}

export const LoadOnVisible: FC<LoadOnVisibleProps> = ({ children }) => {
  const { observe, inView } = useInView<HTMLDivElement>({
    unobserveOnEnter: true,
    rootMargin: "50px"
  });

  return <div ref={observe}>{inView ? children : null}</div>;
};
