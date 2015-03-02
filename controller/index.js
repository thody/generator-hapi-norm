'use strict';

var yeoman = require('yeoman-generator');
var slug = require('slug');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Controller generator'
    });
  },

  createControllerFile: function() {
    var nameSlug = this.name;
    this.humanizedSingularName = nameSlug.toLowerCase();
    this.template(this.templatePath('controller.js'), this.destinationPath('./' + nameSlug + 'Controller.js'));
  }
});
