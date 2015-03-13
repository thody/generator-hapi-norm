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
    },{
      type: 'confirm',
      name: 'includeDatabase',
      message: 'Would you like to add MongooseJS configuration?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.appDescription = props.appDescription;
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

  renderApplicationDependenciesFiles: function() {
 		this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_server.js', 'server.js');
    this.template('_routes.js', 'routes.js');
    this.template('_README.md', 'README.md');
    this.template('./config/_development_config.json', './config/development_config.json');
    this.template('./config/_test_config.json', './config/test_config.json');
    this.template('./config/_test_config.json', './config/test_config.json');

    if (this.includeDatabase) {
      this.template('./config/_database.js', './config/database.js');
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
