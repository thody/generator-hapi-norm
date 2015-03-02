(function () {

  'use strict';

  var code = require('code');
  var Lab = require('lab');
  var server = require('../server.js');
  var lab = exports.lab = Lab.script();

  lab.experiment('<%= nameSlug %> Controller Tests', function() {

    lab.test('Should list all <%= nameSlug %>', function(done) {
      var options = {
        method: 'GET',
        url: '/<%= nameSlugKC %>'
      };
      server.inject(options, function(res) {
        code.expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
}());
