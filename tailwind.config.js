const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,ts,jsx,tsx}"]
  },
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "720px",
      lg: "960px",
      xl: "1280px"
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem"
      }
    },

    extend: {
      fontFamily: {
        sans: ["Karla", ...fontFamily.sans]
      },

      colors: {
        primary: colors.indigo,

        lime: colors.lime,
        dark: {
          DEFAULT: "hsl(210, 30%, 8%)"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
