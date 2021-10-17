import Head from "next/head";
import type { VFC } from "react";

const genericDescription =
  "Wes Copeland. Senior Software Engineer at ApartmentAdvisor. Building modern web experiences with React and Next.js.";

interface SEOProps {
  pageDescription?: string;
  pageTitle?: string;
}

export const SEO: VFC<SEOProps> = ({ pageDescription, pageTitle }) => {
  const title = pageTitle ? `${pageTitle} | Wes Copeland` : "Wes Copeland";
  const description = pageDescription ?? genericDescription;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
    </Head>
  );
};
