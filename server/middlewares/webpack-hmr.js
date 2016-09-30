var WebpackHotMiddleware = require("webpack-hot-middleware");

module.exports = function (compiler) {
  var middleware = WebpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    log: false,
    heartbeat: 10 * 1000
  })
  return middleware
}
