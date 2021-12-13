const { withContentlayer } = require("next-contentlayer");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(
  withContentlayer()({
    images: {
      domains: ["image.api.playstation.com"]
    }
  })
);
