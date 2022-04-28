import { useTheme } from "next-themes";
import { type FC, useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import { AppBarButton } from "../AppBarButton";

export const DarkModeToggle: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      <span className="hidden ml-2 md:block">{labelText}</span>
    </AppBarButton>
  );
};
