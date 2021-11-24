const basePath = "/";
const projectsPath = "/projects";
const gamingPath = "/gaming";

export const AppRoutes = {
  HomePage() {
    return basePath;
  },

  ProjectsPage() {
    return projectsPath;
  },

  GamingPage() {
    return gamingPath;
  }
};
