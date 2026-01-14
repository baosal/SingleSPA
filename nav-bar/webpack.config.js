const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sag-aftra",
    projectName: "nav-bar",
    webpackConfigEnv,
    systemJS: true,
    argv,
  });

  // Override the single-spa default entry (src/sag-aftra-nav-bar) to use single-spa.tsx.
  defaultConfig.entry = path.resolve(__dirname, "src/single-spa.tsx");

  return merge(defaultConfig, {
    devServer: {
      port: 8080,
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
