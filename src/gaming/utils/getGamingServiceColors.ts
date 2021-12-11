export const getGamingServiceColors = () => {
  return {
    playstation: {
      colors: { light: "#3b82f6", dark: "#3b82f6" },
      classNames: {
        light: "bg-blue-100",
        dark: "bg-blue-600",
        mediaDark: "dark:bg-blue-600"
      }
    },

    xbox: {
      colors: { light: "#22c55e", dark: "#22c55e" },
      classNames: {
        light: "bg-emerald-100",
        dark: "bg-emerald-600",
        mediaDark: "dark:bg-emerald-600"
      }
    },

    ra: {
      colors: { light: "#d97706", dark: "#d97706" },
      classNames: {
        light: "bg-amber-100",
        dark: "bg-amber-600",
        mediaDark: "dark:bg-amber-600"
      }
    }
  };
};
