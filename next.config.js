const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/burger-shop" : "",
  assetPrefix: isProd ? "/burger-shop/" : "",
};
