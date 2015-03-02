'use strict';
var yeoman = require('yeoman-generator');
var slug = require('slug');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
  },
  createControllerFile: function() {
    var nameSlug = slug(this.name);
    this.humanizedSingularName = nameSlug.toLowerCase();
    this.template(this.templatePath('controller.js'), this.destinationPath('./controllers/' + nameSlug + 'Controller.js'))
    this.template(this.templatePath('test.js'), this.destinationPath('./test/' + nameSlug + 'Test.js'))
  }

});
