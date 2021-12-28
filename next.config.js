const { withContentlayer } = require("next-contentlayer");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(
  withContentlayer()({
    images: {
      domains: [
        "image.api.playstation.com",
        "s3-eu-west-1.amazonaws.com",
        "images-eds.xboxlive.com",
        "retroachievements.org"
      ]
    }
  })
);
