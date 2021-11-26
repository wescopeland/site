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
        light: "bg-green-100",
        dark: "bg-green-600",
        mediaDark: "dark:bg-green-600"
      }
    },

    ra: {
      colors: { light: "#d97706", dark: "#d97706" },
      classNames: {
        light: "bg-yellow-100",
        dark: "bg-yellow-600",
        mediaDark: "dark:bg-yellow-600"
      }
    }
  };
};
