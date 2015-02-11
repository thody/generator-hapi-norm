/**
 * Set default node environment
 * @type {string|*}
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Hapi = require('hapi');
var config = require('./lib/config/config');
var server = new Hapi.Server();

/**
 * Creating Server connection with our configuration
 */
server.connection(config.server);

/**
 * Adding routes
 */
server.route(require('./lib/controllers/routes'));
//var routes = require('./lib/controllers/routes')(server);

/**
 * Adding plugins
 */
server.register({register: require('lout')}, function(err) {if(err) {console.log(err); }});

/**
 * Starting server
 */
if (!module.parent) {
  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
