'use strict';
var yeoman = require('yeoman-generator');
var slug = require('slug');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.log(yosay('You called the HapiNorm Environment subgenerator with the argument ' + this.name + '.' ));

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The environment name'
    });

  },
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.

    var prompts = [{
      name: 'envPort',
      message: 'Give your new environemnt a port',
      default: '8080'
    }];

    this.prompt(prompts, function (props) {
      this.envPort = props.envPort;

      done();
    }.bind(this));
  },
  createControllerFile: function() {
    var nameSlug = slug(this.name);
    this.humanizedSingularName = nameSlug;
    this.template(this.templatePath('environment.js'), this.destinationPath('./config/env/' + nameSlug + 'Environment.js'))
  }

});
