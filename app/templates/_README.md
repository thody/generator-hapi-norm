# Hapi Framework

## This package uses:

* Gulp
* Hapi
* Lab for testing

## Get things running

* The default gulp task will run tests and start nodemon.
* `gulp test` wlll run tests
* `gulp serve` will start nodemon

## Controller Sub-Generator

To create a new route using the sub generator use the command: `yo hapi-norm:controller 'NAME'`. This will create a basic restful route for the _NAME_ with intial tests for those routes.

## Model Sub-Generator

To create a new model using the sub generator use the command: `yo hapi-norm:model 'NAME'`. This creates a basic model for _NAME_.

## Config Sub-Generator

To create a new environment configuration using the sub generator, use the command: `yo hapi-norm:config 'NAME'`. This creates a basic configuration environment for _NAME_.