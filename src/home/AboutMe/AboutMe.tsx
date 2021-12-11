import type { VFC } from "react";

import { Animate } from "@/core/components/Animate";

import { HighlightedText } from "../HighlightedText";

export const AboutMe: VFC = () => {
  return (
    <>
      <Animate.FadeUpOnMount>
        <h1 className="text-4xl mb-2 font-bold tracking-tight">
          👋&nbsp; I'm Wes.
        </h1>
      </Animate.FadeUpOnMount>

      <Animate.FadeUpOnMount delay={200}>
        <p className="mb-4">
          <HighlightedText>
            I'm building products and writing code
          </HighlightedText>{" "}
          at ApartmentAdvisor.
        </p>

        <p>
          I'm passionate about front-end development, frameworks, DeFi/Web3, and
          DX. After-hours, you'll find me completing video games on my backlog,
          working on open source, or enjoying a nice IPA. I'm known for once
          holding the world record for the highest score on Donkey Kong.
        </p>
      </Animate.FadeUpOnMount>
    </>
  );
};
