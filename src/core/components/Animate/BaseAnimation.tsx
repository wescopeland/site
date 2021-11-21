import { Transition } from "@headlessui/react";
import cc from "classcat";
import type { ElementType, FC } from "react";

export interface BaseAnimationProps {
  as?: ElementType<any>;
  canShow?: boolean;
  delay?: 50 | 200;
  shouldAnimateOnMount?: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
}

export const BaseAnimation: FC<BaseAnimationProps> = ({
  as,
  children,
  canShow,
  delay,
  shouldAnimateOnMount,
  enter,
  enterFrom,
  enterTo,
  leave,
  leaveFrom,
  leaveTo
}) => {
  let isShowing = false;
  if (shouldAnimateOnMount || canShow) {
    isShowing = true;
  }

  return (
    <Transition
      as={as}
      appear={shouldAnimateOnMount}
      show={isShowing}
      enter={
        enter ??
        cc([
          "transition transform duration-300",
          delay === 50 && "delay-50",
          delay === 200 && "delay-200"
        ])
      }
      enterFrom={enterFrom}
      enterTo={enterTo}
      leave={leave}
      leaveFrom={leaveFrom}
      leaveTo={leaveTo}
    >
      {children}
    </Transition>
  );
};
