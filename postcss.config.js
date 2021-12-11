module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-nested": {
      bubble: ["screen"]
    },
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
  }
};
