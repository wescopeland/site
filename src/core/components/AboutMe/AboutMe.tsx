import type { VFC } from "react";

export const AboutMe: VFC = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div className="sm:pr-16">
        <h1 className="mb-1 text-4xl font-bold tracking-tight">
          Hi! 👋&nbsp; I'm Wes.
        </h1>

        <h2 className="mb-4">
          I'm a Senior Software Engineer at{" "}
          <a
            className="font-semibold text-primary-700 dark:text-primary-400 hover:underline"
            href="https://www.apartmentadvisor.com"
            target="_blank"
          >
            ApartmentAdvisor
          </a>
          .
        </h2>

        <p>
          Here you'll find a collection of things I've been thinking about. I'm
          passionate about front-end development, frameworks, and dev
          experience. After-hours, you'll find me completing video games on my
          backlog, traveling, or enjoying a nice IPA. I'm known for once holding
          the world record for{" "}
          <a
            href="https://arstechnica.com/gaming/2016/05/is-this-the-worlds-first-perfect-game-of-donkey-kong/"
            target="_blank"
            className="font-semibold text-primary-700 dark:text-primary-400 hover:underline"
          >
            the highest score on Donkey Kong
          </a>
          .
        </p>
      </div>

      <div style={{ minWidth: 140 }}>
        <img
          style={{ width: 140, height: 140 }}
          className="mb-6 border-2 border-gray-700 rounded-sm shadow dark:border-gray-300"
          src="https://pbs.twimg.com/profile_images/1308178916381790210/VhbqD70K_400x400.png"
        />
      </div>
    </div>
  );
};
