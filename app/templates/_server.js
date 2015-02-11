/**
 * Set default node environment
 * @type {string|*}
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Hapi = require('hapi');
var config = require('./lib/config/config');
var server = new Hapi.Server();
var good = require('good');
var goodConsole = require('good-console');
var goodFile = require('good-file');
var goodHttp = require('good-http');

var goodConfig = {
    opsInterval: 1000,
    reporters: [{
        reporter: goodConsole,
        args:[{ log: '*', response: '*' }]
    }, {
        reporter: goodFile,
        args: ['./test/fixtures/awesome_log', { ops: '*' }]
    }, {
        reporter: goodHttp,
        args: [{ error: '*' }, 'http://prod.logs:3000', {
            threshold: 20,
            wreck: {
                headers: { 'x-api-key' : 12345 }
            }
        }]
    }]
};

/**
 * Creating Server connection with our configuration
 */
server.connection(config.server);

/**
 * Adding routes
 */
server.route(require('./lib/controllers/routes'));

/**
 * Adding plugins
 */
server.register({register: require('lout')}, function(err) {if(err) {console.log(err); }});
server.register({
  register: good,
  options: goodConfig
}, function (err) {
  if (err) {console.error(err);}

  else {
    /**
     * Starting server
     */
    if (!module.parent) {
      server.start(function () {
        console.info('Server started at ' + server.info.uri);
      });
    }
  }
});

module.exports = server;
