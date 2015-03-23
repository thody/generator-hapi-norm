// Set configuration root directory
process.env.GETCONFIG_ROOT = './config';

// Configure default environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Load modules
var _ = require('lodash');
var Hapi = require('hapi');
var GoodConsole = require('good-console');
var Glob = require('glob');


// Load configuration
var Config = require('getconfig');

<% if (includeDatabase) { %>
// Load database configuration
var Database = require('./config/database');
<% } %>

// Configure reporting
var goodConfig = {
    reporters: [{
        reporter: GoodConsole,
        args:[{ log: '*', response: '*' }]
    }]
};


// Instantiate server
var server = new Hapi.Server();


// Establish connection
server.connection({
  port: process.env.PORT || Config.server.port || 8000
});


// Load routes
var controllers = Glob.sync('**/*Controller.js', {});

_.forEach(controllers, function (controller) {

  server.route(require(__dirname + '/' + controller).routes);
  console.log('- Loaded routes from %s', controller);

});


// Register plugins
server.register([
  {
    register: require('lout'),
    options: {}
  },

  {
    register: require('good'),
    options: goodConfig
  }
], function (err) {

  if (err) {

    console.log('Failed to load a plugin:', err);
    process.exit(1);

  } else {

    // Start server
    if (!module.parent) {
      server.start(function () {
        console.info('Server started at ' + server.info.uri);
      });
    }
  }
});

module.exports = server;
