const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sag-aftra",
    projectName: "user-info",
    webpackConfigEnv,
    argv,
  });

  // Override the single-spa default entry (src/sag-aftra-module-1) to use single-spa.tsx.
  defaultConfig.entry = path.resolve(__dirname, "src/single-spa.tsx");

  return merge(defaultConfig, {
    devServer: {
      port: 9003,
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
