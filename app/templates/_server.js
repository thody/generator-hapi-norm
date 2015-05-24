// Configure default environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Load modules
var _ = require('lodash');
var Config = require('getconfig');
var Glob = require('glob');
var Good = require('good');
var GoodConsole = require('good-console');
var Hapi = require('hapi');
var Hoek = require('hoek');
var Lout = require('lout');
<% if (includeDatabase) { %>var Database = require('./lib/database');<% } %>

// Declare internals
var internals = {};

// Configure reporting
internals.goodConfig = {
    reporters: [{
        reporter: GoodConsole,
        events: [{ log: '*', response: '*' }]
    }]
};


internals.init = function () {

  var server = new Hapi.Server();
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
  <% if (includeDatabase) { %>{
      register: Database,
      options: {
        url: Config.mongo.url
      }
    },<% } %>

    {
      register: Lout
    },

    {
      register: Good,
      options: internals.goodConfig
    }
  ], function (err) {

    Hoek.assert(!err, err);
    server.start(function (err) {

      Hoek.assert(!err, err);
      console.info('Server started at ' + server.info.uri);
    });
  });
};

internals.init();
