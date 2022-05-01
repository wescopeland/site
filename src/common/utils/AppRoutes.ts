import { subst } from "urlcat";

import type { GamingPlatformId } from "@/common/models";

const basePath = "/";
const projectsPath = "/projects";
const gamingPath = "/gaming";
const gamingPlatformPath = "/gaming/:platformId";
const blogPath = "/blog";
const blogPostPath = "/blog/:slug";

export const AppRoutes = {
  HomePage() {
    return basePath;
  },

  ProjectsPage() {
    return projectsPath;
  },

  GamingPage() {
    return gamingPath;
  },

  GamingPlatformPage(options: { platformId: GamingPlatformId }) {
    const { platformId } = options;
    return subst(gamingPlatformPath, { platformId });
  },

  BlogPage() {
    return blogPath;
  },

  BlogPostPage(options: { slug: string }) {
    const { slug } = options;
    return subst(blogPostPath, { slug });
  }
};
