'use strict';

exports.routes = [];

// List <%= nameSlug %>
exports.routes.push({
  method: 'GET',
  path: '/<%= nameSlugKC %>',
  config: {
    handler: function (request, reply) {
      reply('Hello world');
    }
  }
});
