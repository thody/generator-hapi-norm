'use strict';

module.exports = [
  {
  /**
   * Create
   */
  method: 'POST',
  path: '/<%= humanizedSingularName %>',
  config: {
    handler: function (req, res) {
      res('New controller <%= humanizedSingularName %>');
    }
  },
  {
  /**
   * Read
   */
  method: 'GET',
  path: '/<%= humanizedSingularName %>',
  config: {
    handler: function (req, res) {
      res('New controller <%= humanizedSingularName %>');
    }
  },
  {
  /**
   * Update
   */
  method: 'PUT',
  path: '/<%= humanizedSingularName %>',
  config: {
    handler: function (req, res) {
      res('New controller <%= humanizedSingularName %>');
    }
  },
  {
  /**
   * Delete
   */
  method: 'DELETE',
  path: '/<%= humanizedSingularName %>',
  config: {
    handler: function (req, res) {
      res('New controller <%= humanizedSingularName %>');
    }
  },
  {
  /**
   * List
   */
  method: 'GET',
  path: '/<%= humanizedSingularName %>',
  config: {
    handler: function (req, res) {
      res('New controller <%= humanizedSingularName %>');
    }
  }

}];
