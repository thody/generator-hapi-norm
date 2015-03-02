'use strict';

exports.routes = [];

exports.routes.push({
  method: 'GET',
  path: '/<%= humanizedSingularName %>',
  config: {
    handler: function (request, reply) {
      reply('Hello world');
    }
  }
});
