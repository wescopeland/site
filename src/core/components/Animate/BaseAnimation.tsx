import { Transition } from "@headlessui/react";
import cc from "classcat";
import type { CSSProperties, ElementType, FC } from "react";

export interface BaseAnimationProps {
  as?: ElementType<any>;
  canShow?: boolean;
  delay?: 50 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
  shouldAnimateOnMount?: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
  style?: CSSProperties;
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
  leaveTo,
  style
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
      enter={cc([
        enter ?? "transition transform duration-300",
        delay === 50 && "delay-50",
        delay === 100 && "delay-100",
        delay === 150 && "delay-150",
        delay === 200 && "delay-200",
        delay === 300 && "delay-300",
        delay === 500 && "delay-500",
        delay === 700 && "delay-700",
        delay === 1000 && "delay-1000"
      ])}
      enterFrom={enterFrom}
      enterTo={enterTo}
      leave={leave}
      leaveFrom={leaveFrom}
      leaveTo={leaveTo}
      style={style}
    >
      {children}
    </Transition>
  );
};
