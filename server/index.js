var config = require("../config");
var app = require("./app");
var http = require("http");
var chalk = require('chalk');
var clearConsole = require('./lib/clearConsole');
var openBrowser = require('react-dev-utils/openBrowser');

var port = config.server_port;
var host = config.server_host;
var protocol = config.server_protocol;
var server_url = protocol + '://' + host + ':' + port;

var server = http.createServer(app);

server.listen(port);

server.on('listening', function() {
  clearConsole();
  console.log('The app is running at:')
  console.log('\n\t' + chalk.cyan(server_url) + '\n')
  console.log('Note that the development build is not optimized.')
  if (config.server_open_browser) {
    openBrowser(server_url)
  }
})
