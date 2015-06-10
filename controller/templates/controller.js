exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/<%= nameSlugKC %>',
    config: {
      handler: function (request, reply) {
        reply('Hello world');
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: '<%= nameSlugKC %>'
};
