import cc from "classcat";
import type { FC, ReactNode } from "react";

import styles from "./HighlightedText.module.css";

interface HighlightedTextProps {
  children?: ReactNode;
  className?: string;
}

export const HighlightedText: FC<HighlightedTextProps> = ({
  children,
  className
}) => {
  return <span className={cc([styles.root, className])}>{children}</span>;
};
