import { subst } from "urlcat";

const basePath = "/";
const projectsPath = "/projects";
const gamingPath = "/gaming";
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

  BlogPage() {
    return blogPath;
  },

  BlogPostPage(options: { slug: string }) {
    const { slug } = options;
    return subst(blogPostPath, { slug });
  }
};
