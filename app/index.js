'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var HapiNorm = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('HapiNorm') + ' generator! You sure are one bad-ass mo-fo!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name ?',
      default: 'HapiNess'
    //},{
    //    type: 'confirm',
    //    name: 'addDemoSection',
    //    message: 'Would you like to generate a demo section ?',
    //    default: true
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.addDemoSection = props.addDemoSection;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      //this.fs.copy(
      //  this.templatePath('editorconfig'),
      //  this.destinationPath('.editorconfig')
      //);
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('_server.js'),
        this.destinationPath('server.js')
      );
      this.fs.copy(
        this.templatePath('_README'),
        this.destinationPath('README')
      );
      this.fs.copy(
        this.templatePath('lib'),
        this.destinationPath('lib')
      );
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  },

  end: function() {

    this.log(yosay(
      'We\'re all done here, have a nice day!'
    ));


  }
});

module.exports = HapiNorm;
