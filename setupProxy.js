const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://carlosavellar.github.io/burger-shop/",
      changeOrigin: true,
    })
  );
};
