import type { FC, ReactNode } from "react";

import styles from "./HighlightedText.module.css";

interface HighlightedTextProps {
  children?: ReactNode;
}

export const HighlightedText: FC<HighlightedTextProps> = ({ children }) => {
  return <span className={styles.root}>{children}</span>;
};
