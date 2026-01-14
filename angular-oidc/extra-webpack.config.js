const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  const cfg = singleSpaAngularWebpack(config, options);

  return cfg;
};
