'use strict';

var <%= humanizedSingularName %>Controller = {
  create: function (req, res) {
    res('New controller <%= humanizedSingularName %>');
  },
  read: function (req, res) {
    res('New controller <%= humanizedSingularName %>');
  },
  update: function (req, res) {
    res('New controller <%= humanizedSingularName %>');
  },
  del: function (req, res) {
    res('New controller <%= humanizedSingularName %>');
  },
  list: function (req, res) {
    res('New controller <%= humanizedSingularName %>');
  }
};

module.exports = [
  {method: 'POST',    path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Controller.create}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>/{<%= humanizedSingularName %>?}', config: {handler: <%= humanizedSingularName %>Controller.read}},
  {method: 'PUT',     path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Controller.update}},
  {method: 'DELETE',  path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Controller.del}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>s', config: {handler: <%= humanizedSingularName %>Controller.list}}
];