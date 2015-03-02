'use strict';

exports.routes = [];

// List <%= humanizedSingularName %>
exports.routes.push({
  method: 'GET',
  path: '/<%= humanizedSingularName %>',
  config: {
    handler: function (request, reply) {
      reply('Hello world');
    }
  }
});
