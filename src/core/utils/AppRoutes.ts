const basePath = "/";
const projectsPath = "/projects";
const gamingPath = "/gaming";
const blogPath = "/blog";

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
  }
};
