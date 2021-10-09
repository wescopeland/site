import type { ReactElement } from "react";

import { NavBar } from "@/core/components/NavBar";
import { BaseLayout } from "@/core/layouts/BaseLayout";
import type { AppPage } from "@/core/models";
import { AboutMe } from "@/core/components/AboutMe";

const HomePage: AppPage = () => {
  return (
    <>
      <NavBar />

      <main>
        <div className="container max-w-2xl px-0 pb-12 mx-auto">
          <AboutMe />
        </div>
      </main>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
