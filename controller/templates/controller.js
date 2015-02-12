'use strict';

var <%= humanizedSingularName %>Ctrl = {
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
  {method: 'POST',    path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Ctrl.create}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Ctrl.read}},
  {method: 'PUT',     path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Ctrl.update}},
  {method: 'DELETE',  path: '/<%= humanizedSingularName %>', config: {handler: <%= humanizedSingularName %>Ctrl.del}},
  {method: 'GET',     path: '/<%= humanizedSingularName %>/list', config: {handler: <%= humanizedSingularName %>Ctrl.list}}
];