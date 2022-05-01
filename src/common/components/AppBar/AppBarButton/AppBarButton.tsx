import cc from "classcat";
import type { ElementType, ReactNode } from "react";

import type { PolymorphicComponentProps } from "@/common/models";

interface Props {
  children: ReactNode;
}

type AppBarButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  Props
>;

export const AppBarButton = <C extends ElementType = "button">({
  as: cmp,
  className,
  style,
  children,
  ...other
}: AppBarButtonProps<C>) => {
  const Component = cmp ?? "button";

  return (
    <Component
      className={cc([
        "flex justify-center items-center p-2 border-2 border-transparent min-w-[48px] h-10 rounded-xl",
        "transition transform",
        "active:shadow-none active:scale-95",
        "bg-white dark:bg-dark text-black dark:text-white",
        "hover:shadow hover:bg-gray-50 hover:border-gray-600",
        "dark:hover:bg-gray-600 dark:hover:border-gray-200",
        "select-none",
        className
      ])}
      style={{
        transitionProperty: "transform, border-color",
        ...style
      }}
      {...other}
    >
      {children}
    </Component>
  );
};
