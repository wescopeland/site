import urlcat from "urlcat";

const basePath = "/";
const projects = "/projects";
const todayILearned = "/today-i-learned";
const todayILearnedPost = "/today-i-learned/:postSlug";

export const AppRoutes = {
  HomePage() {
    return basePath;
  },

  ProjectsPage() {
    return projects;
  },

  TodayILearnedPage() {
    return todayILearned;
  },

  TodayILearnedPostPage(options: { postSlug: string }) {
    const { postSlug } = options;

    return urlcat(todayILearnedPost, { postSlug });
  }
};
