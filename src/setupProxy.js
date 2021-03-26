const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api',{
      // target: 'http://lb.28888753.cn',//请求的真实地址
      target: 'http://127.0.0.1:8888/admin/',//请求的真实地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
        }
    })
  );
};