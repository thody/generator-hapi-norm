'use strict';
var yeoman = require('yeoman-generator');
var slug = require('slug');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.log('You called the HapiNorm subgenerator with the argument ' + this.name + '.');

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
  },

  writing: function () {

    var nameSlug = slug(this.name);

    this.fs.copy(
      this.templatePath('controller.js'),
      this.destinationPath('./lib/controllers/' + nameSlug + 'Ctrl.js')
    );
  }
});
