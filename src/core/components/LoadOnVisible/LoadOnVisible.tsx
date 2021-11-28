import type { FC } from "react";
import useInView from "react-cool-inview";

export const LoadOnVisible: FC = ({ children }) => {
  const { observe, inView } = useInView<HTMLDivElement>({
    unobserveOnEnter: true,
    rootMargin: "50px"
  });

  return <div ref={observe}>{inView ? children : null}</div>;
};
