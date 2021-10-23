import cc from "classcat";
import { useTheme } from "next-themes";
import type { VFC } from "react";
import { HiOutlineSun, HiSun } from "react-icons/hi";
import { useMountedState } from "react-use";

export const DarkModeToggle: VFC = () => {
  const isMounted = useMountedState();
  const { theme, setTheme } = useTheme();

  if (!isMounted) {
    return null;
  }

  const IconComponent = theme === "dark" ? HiSun : HiOutlineSun;
  const a11yLabel = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      aria-label={a11yLabel}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className={cc([
        "p-2 border border-transparent rounded-full",
        "transition transform",
        "active:shadow-none active:scale-95",
        "text-black dark:text-white",
        "hover:shadow hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:border-gray-200 hover:border-gray-600"
      ])}
    >
      <IconComponent className="text-2xl" />
    </button>
  );
};
