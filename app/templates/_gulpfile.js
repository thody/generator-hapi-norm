var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var lab = require('gulp-lab');

gulp.task('test', function () {
  return gulp.src('./test/**/*.js')
    .pipe(lab({
      args: '-v -C',
      opts: {
        emitLabError: true
      }
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint.reporter('default'));
});

gulp.task('serve', [], function(){
  nodemon({ script: 'server.js'})
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', ['test', 'serve']);

