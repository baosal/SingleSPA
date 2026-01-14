const path = require("path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sag-aftra",
    projectName: "form-js",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.entry = path.resolve(__dirname, "app/spa/single-spa.tsx");

  return merge(defaultConfig, {
    devServer: {
      port: 9002,
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, "app"),
      },
      extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "app"),
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
