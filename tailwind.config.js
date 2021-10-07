const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,ts,jsx,tsx}"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
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
        primary: colors.lime
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
