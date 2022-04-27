const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
        dark: {
          DEFAULT: "hsl(210, 30%, 8%)"
        }
      },

      animation: {
        "fade-up": "fade-up 300ms ease"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(1.5rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      }
    }
  },

  variants: {
    transitionProperty: ["motion-safe", "motion-reduce"],
    extend: {}
  },

  plugins: [require("@tailwindcss/typography")]
};
