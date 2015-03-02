'use strict';

var _ = require('lodash');
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

  createControllerTestFile: function() {
    this.nameSlug = this.name;
    this.nameSlugCC = _.camelCase(this.name);
    this.nameSlugKC = _.kebabCase(this.name);
    this.template(this.templatePath('test.js'), this.destinationPath('./' + this.nameSlugCC + 'ControllerTests.js'));
  }
});
