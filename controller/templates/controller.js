'use strict';

var <%= humanizedSingularName %>Controller = {
  create: function (request, reply) {
    reply('New controller <%= humanizedSingularName %>');
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

module.exports = [
  {method: 'POST',    path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Controller.create}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>/{<%= humanizedSingularName %>?}', config: {handler: <%= humanizedSingularName %>Controller.read}},
  {method: 'PUT',     path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Controller.update}},
  {method: 'DELETE',  path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Controller.del}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>s', config: {handler: <%= humanizedSingularName %>Controller.list}}
];
