import cc from "classcat";
import type { FC } from "react";
import { useTimeout } from "react-use";

interface FadeUpOnMountProps {
  delay?: number;
}

/**
 * Next.js has issues running animations on initial server renders.
 * This forces the fade up animation to play by utilizing keyframes,
 * with the trade-off being that this component is much less customizable
 * and the animation doesn't internally manage conditional rendering.
 */
export const FadeUpOnMount: FC<FadeUpOnMountProps> = ({ children, delay }) => {
  const [isReady] = useTimeout(delay ?? 0);

  return (
    <div className={cc([isReady() ? "animate-fade-up" : "opacity-0"])}>
      {children}
    </div>
  );
};
