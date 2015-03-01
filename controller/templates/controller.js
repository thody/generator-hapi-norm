'use strict';

// Define handlers
var controller = {
  create: function (request, reply) {
    reply('New controller <%= humanizedSingularName %>').code(201);
  },
  read: function (request, reply) {
    reply('New controller <%= humanizedSingularName %>');
  },
  update: function (request, reply) {
    reply('New controller <%= humanizedSingularName %>');
  },
  destroy: function (request, reply) {
    reply('New controller <%= humanizedSingularName %>');
  },
  list: function (request, reply) {
    reply('New controller <%= humanizedSingularName %>');
  }
};


// Export routes
module.exports = [
  {method: 'POST',    path: '/<%= humanizedSingularName %>', config: {handler: controller.create}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>/{<%= humanizedSingularName %>?}', config: {handler: controller.read}},
  {method: 'PUT',     path: '/<%= humanizedSingularName %>', config: {handler: controller.update}},
  {method: 'DELETE',  path: '/<%= humanizedSingularName %>', config: {handler: controller.destroy}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>s', config: {handler: controller.list}}
];
