import type { FC } from "react";

import styles from "./HighlightedText.module.css";

export const HighlightedText: FC = ({ children }) => {
  return <span className={styles.root}>{children}</span>;
};
