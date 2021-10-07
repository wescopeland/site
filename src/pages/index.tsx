import type { ReactElement } from "react";

import { NavBar } from "@/core/components/NavBar";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";

const HomePage: AppPage = () => {
  return (
    <>
      <NavBar />

      <main>
        <div className="container max-w-2xl px-0 mx-auto">
          <div className="flex">
            <div className="pr-16">
              <h1 className="mb-1 text-4xl font-bold tracking-tight text-black">
                Hi! 👋&nbsp; I'm Wes.
              </h1>

              <h2 className="mb-4">
                I'm a Senior Software Engineer at{" "}
                <a
                  className="font-semibold text-primary-700 hover:underline"
                  href="https://www.apartmentadvisor.com"
                  target="_blank"
                >
                  ApartmentAdvisor
                </a>
                .
              </h2>

              <p>
                This is where you'll find a collection of things I've been
                thinking about. I'm passionate about front-end web development
                and developer experience. After-hours, you'll find me completing
                video games on my backlog, traveling, or enjoying a nice IPA. I
                was once known for holding the world record for{" "}
                <a
                  href="https://arstechnica.com/gaming/2016/05/is-this-the-worlds-first-perfect-game-of-donkey-kong/"
                  target="_blank"
                  className="font-semibold text-primary-700 hover:underline"
                >
                  the highest score on Donkey Kong
                </a>
                .
              </p>
            </div>

            <div style={{ minWidth: 140 }}>
              <img
                style={{ width: 140, height: 140 }}
                className="rounded-full"
                src="https://pbs.twimg.com/profile_images/1308178916381790210/VhbqD70K_400x400.png"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
