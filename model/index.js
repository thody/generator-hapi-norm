'use strict';
var yeoman = require('yeoman-generator');
var slug = require('slug');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.log('You called the HapiNorm model subgenerator with the argument ' + this.name + '.');

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The model name (singluar)'
    });
  },
  createControllerFile: function() {
    var nameSlug = slug(this.name);
    this.humanizedSingularName = nameSlug;
    this.template(this.templatePath('model.js'), this.destinationPath('./models/' + nameSlug + 'Model.js'))
  }

});
