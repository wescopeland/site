import { useTheme } from "next-themes";
import type { VFC } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useMountedState } from "react-use";

import { AppBarButton } from "../AppBarButton";

export const DarkModeToggle: VFC = () => {
  const isMounted = useMountedState();
  const { resolvedTheme, setTheme } = useTheme();

  if (!isMounted || resolvedTheme === undefined) {
    return <div style={{ minHeight: 40 }} />;
  }

  const IconComponent = resolvedTheme === "dark" ? HiOutlineMoon : HiOutlineSun;
  const labelText = `Switch to ${
    resolvedTheme === "dark" ? "light" : "dark"
  } mode`;

  return (
    <AppBarButton
      aria-label={labelText}
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      <IconComponent />
      <span className="hidden md:block ml-2">{labelText}</span>
    </AppBarButton>
  );
};
