'use strict';

var code = require('code');
var Lab = require('lab');
var server = require('../server.js');
var lab = exports.lab = Lab.script();

lab.experiment('<%= humanizedSingularName %> Tests', function() {

  lab.test('<%= humanizedSingularName %> endpoint POST req', function(done) {
    var options = {
      method: 'POST',
      url: '/<%= humanizedSingularName %>'
    };
    server.inject(options, function(res) {
      code.expect(res.statusCode).to.equal(200);
      done();
    });
  });

  lab.test('<%= humanizedSingularName %> endpoint GET req', function(done) {
    var options = {
      method: 'GET',
      url: '/<%= humanizedSingularName %>'
    };
    server.inject(options, function(res) {
      code.expect(res.statusCode).to.equal(200);
      done();
    });
  });

  lab.test('<%= humanizedSingularName %> endpoint PUT req', function(done) {
    var options = {
      method: 'PUT',
      url: '/<%= humanizedSingularName %>'
    };
    server.inject(options, function(res) {
      code.expect(res.statusCode).to.equal(200);
      done();
    });
  });

  lab.test('<%= humanizedSingularName %> endpoint DELETE req', function(done) {
    var options = {
      method: 'DELETE',
      url: '/<%= humanizedSingularName %>'
    };
    server.inject(options, function(res) {
      code.expect(res.statusCode).to.equal(200);
      done();
    });

    lab.test('<%= humanizedSingularName %> endpoint GET list req', function(done) {
      var options = {
        method: 'GET',
        url: '/<%= humanizedSingularName %>s'
      };
      server.inject(options, function(res) {
        code.expect(res.statusCode).to.equal(200);
        done();
      });
    });

  });

});
