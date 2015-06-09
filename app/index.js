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
      'Welcome to the ' + chalk.red('hapi service') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What would you like to call your application?',
      default: 'My Service'
    }, {
      name: 'appDescription',
      message: 'How would you describe your application?',
      default: 'My Service'
    }, {
      name: 'isPrivate',
      type: 'confirm',
      message: 'Would you like to mark this package as private?',
      default: true
    }, {
      name: 'appKeywords',
      message: 'How would you describe your application in comma seperated key words?',
      default: 'rest, microservice, web-service'
    }, {
      name: 'appAuthor',
      message: 'What is your company/author name?',
      default: ''
    }, {
      name: 'repoUrl',
      message: 'What is the repo URL?',
      default: ''
    }, {
      type: 'confirm',
      name: 'includeDatabase',
      message: 'Would you like to add MongooseJS configuration?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.appDescription = props.appDescription;
      this.isPrivate = props.isPrivate;
      this.appKeywords = props.appKeywords;
      this.appAuthor = props.appAuthor;
      this.repoUrl = props.repoUrl;

      this.includeDatabase = props.includeDatabase;

      this.slugifiedAppName = this._.slugify(this.appName);
      this.humanizedAppName = this._.humanize(this.appName);
      this.capitalizedAppAuthor = this._.capitalize(this.appAuthor);

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      );
    }
  },

  renderApplicationDependenciesFiles: function () {
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('./lib/_index.js', './lib/index.js');
    this.template('./lib/_start.js', './lib/start.js');
    this.template('./lib/_version.js', './lib/version.js');
    this.template('_README.md', 'README.md');
    this.template('./config/_development.json', './config/development.json');
    this.template('./config/_default.json', './config/default.json');
    this.template('./config/_test.json', './config/test.json');

    if (this.includeDatabase) {
      this.template('./lib/_database.js', './lib/database.js');
    }
  },

  install: function () {
    var dependencies = [
      'hapi',
      'hoek',
      'boom',
      'glue',
      'good',
      'good-console',
      'joi',
      'lout',
      'getconfig',
      'lodash',
      'glob'
    ];

    if (this.includeDatabase) {
      dependencies.push('mongoose');
    }

    var devDependencies = [
      'lab',
      'code',
      'gulp-lab',
      'gulp-jshint',
      'gulp',
      'gulp-serve',
      'gulp-ruby-sass',
      'gulp-util',
      'gulp-uglify',
      'gulp-watch',
      'gulp-concat',
      'gulp-notify',
      'gulp-nodemon'
    ];

    this.npmInstall(dependencies, { 'save': true });
    this.npmInstall(devDependencies, { 'saveDev': true });

    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  },

  end: function () {

    this.log(yosay('Run `' + chalk.green('npm start') + '` to start your new service.'));

  }
});

module.exports = HapiNorm;
