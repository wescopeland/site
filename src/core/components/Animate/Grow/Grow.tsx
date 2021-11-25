import type { FC } from "react";

import type { BaseAnimationProps } from "../BaseAnimation";
import { BaseAnimation } from "../BaseAnimation";

type GrowProps = Pick<
  BaseAnimationProps,
  "as" | "canShow" | "delay" | "shouldAnimateOnMount"
>;

export const Grow: FC<GrowProps> = ({
  as,
  children,
  canShow,
  delay,
  shouldAnimateOnMount
}) => {
  return (
    <BaseAnimation
      as={as}
      canShow={canShow}
      shouldAnimateOnMount={shouldAnimateOnMount}
      delay={delay}
      enter="ease-out duration-300"
      enterFrom="motion-safe:opacity-0 motion-safe:scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="motion-safe:opacity-0 motion-safe:scale-95"
    >
      {children}
    </BaseAnimation>
  );
};
