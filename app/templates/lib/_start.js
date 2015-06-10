// Load modules

var _ = require('lodash');
var Config = require('getconfig');
var Hoek = require('hoek');
var Glob = require('glob');
var Server = require('./index');


// Declare internals

var internals = {};

internals.manifest = {
  connections: [
    {
      port: process.env.PORT || Config.server.port || 8000
    }
  ],
  plugins: {
    './version': {},
    'lout': {},
    'good': {
      reporters: [{
        reporter: require('good-console'),
        events: [{ log: '*', response: '*' }]
      }]
    }
  }
};

<% if (includeDatabase) { %>
  internals.manifest.plugins['./database'] = {
    url: Config.mongo.url
  };
<% } %>

// Load routes
var controllers = Glob.sync('**/*Controller.js', { cwd: process.cwd() + '/lib'});

_.forEach(controllers, function (controller) {

  internals.manifest.plugins['./' + controller] = {};
  
});

internals.composeOptions = {
  relativeTo: __dirname
};

Server.init(internals.manifest, internals.composeOptions, function (err, server) {

  Hoek.assert(!err, err);
  console.log('Server started at: ' + server.info.uri);
});
