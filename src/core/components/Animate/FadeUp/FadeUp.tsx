import type { FC } from "react";

import type { BaseAnimationProps } from "../BaseAnimation";
import { BaseAnimation } from "../BaseAnimation";

type FadeUpProps = Pick<
  BaseAnimationProps,
  "as" | "canShow" | "delay" | "shouldAnimateOnMount"
>;

export const FadeUp: FC<FadeUpProps> = ({
  children,
  as,
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
      enterFrom="motion-safe:opacity-0 motion-safe:translate-y-6"
      enterTo="opacity-100 translate-y-0"
    >
      {children}
    </BaseAnimation>
  );
};
