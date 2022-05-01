import cc from "classcat";
import type { FC } from "react";

export const Gradient: FC = () => {
  return (
    <div
      className={cc([
        "fixed top-0 left-0 right-0 pointer-events-none",
        "w-[200vw] h-[200vh]"
      ])}
      style={{
        transform: "translate(-50vw, -100vh)",
        background:
          "radial-gradient(50% 50% at 50% 50%,#7c3aed26 0,rgba(255,255,255,0) 100%)"
      }}
    />
  );
};
