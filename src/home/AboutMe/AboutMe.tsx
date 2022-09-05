import type { FC } from "react";

import { Animate } from "@/common/components/Animate";

import { HighlightedText } from "../HighlightedText";

export const AboutMe: FC = () => {
  return (
    <>
      <Animate.FadeUpOnMount>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          👋&nbsp; I'm Wes.
        </h1>
      </Animate.FadeUpOnMount>

      <Animate.FadeUpOnMount delay={200}>
        <p className="mb-4">
          <span className="font-semibold sm:hidden">
            I'm building products and writing code
          </span>
          <HighlightedText className="hidden sm:inline">
            I'm building products and writing code
          </HighlightedText>{" "}
          at ApartmentAdvisor.
        </p>

        <p>
          I'm passionate about front-end development, frameworks, testing, and
          DX. After-hours, you'll find me working on open source, playing retro
          games, or enjoying a nice cup of matcha. I'm known for once holding
          the world record for the highest score on Donkey Kong.
        </p>
      </Animate.FadeUpOnMount>
    </>
  );
};
