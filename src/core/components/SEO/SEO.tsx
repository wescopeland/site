import Head from "next/head";
import type { FC } from "react";

const genericDescription =
  "Wes Copeland. Senior Software Engineer at ApartmentAdvisor. Building modern web experiences with React, TypeScript, and Next.js.";

export interface SEOProps {
  pageDescription?: string;
  pageTitle?: string;
}

export const SEO: FC<SEOProps> = ({ pageDescription, pageTitle }) => {
  const title = pageTitle ? `${pageTitle} | Wes Copeland` : "Wes Copeland";
  const description = pageDescription ?? genericDescription;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf8" />
      <meta name="description" content={description} />
    </Head>
  );
};
