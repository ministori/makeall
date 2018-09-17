var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var fileData = require('gulp-pub-list');
var minify = require('gulp-minify');

/**
 * build default
 */

// build html including header/footer
gulp.task('build:include:html', function(){
  gulp.src(['_dev_src/html/*.html'])
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest('html/'));
});

// build sass for dev
gulp.task('build:sass:dev', function(){
  gulp.src('_dev_src/scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'));
});

// build js compress
gulp.task('build:js:compress', function(){
  gulp.src(['_dev_src/js/*.js'])
      .pipe(concat('function.js'))
      .pipe(minify({
        ext:{
          src : '.debug.js',
          min : '.min.js'
        }
      }))
      .pipe(gulp.dest('js/'));
});

/**
 * build seperately
 */

// copy js library file
gulp.task('seperate:copy:jsLib', function() {
  gulp.src('_dev_src/js/lib/*.*')
      .pipe(gulp.dest('js/lib/'));
});

// build file list to json data
gulp.task('seperate:build:fileListJson', function() {
  fileData('./html/', './_dev_src/data/file_list.json');
});

// copy file list json
// gulp.task('seperate:copy:fileListJson', function(){
//   gulp.src('_dev_src/data/*.json')
//       .pipe(concat('file_data.json'))
//       .pipe(gulp.dest('_dev_src/data/'));
// });

/**
 * release
 */

// release html
gulp.task('release:html', function(){
  gulp.src(['_dev_src/html/*.html'])
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest('release/html/'));
});

// release sass
gulp.task('release:sass', function(){
  gulp.src('_dev_src/scss/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('release/css/'));
});

// release js
gulp.task('release:js:compress', function(){
  gulp.src(['_dev_src/js/*.js'])
      .pipe(concat('function.js'))
      .pipe(minify({
        ext:{
          src : '.debug.js',
          min : '.min.js'
        }
      }))
      .pipe(gulp.dest('release/js/'));
});

// release js library file
gulp.task('release:copy:jsLib', function() {
  return gulp.src('_dev_src/js/lib/*.*')
      .pipe(gulp.dest('release/js/lib/'));
});

// release images
gulp.task('release:images', function(){
  return gulp.src('images/*.*')
      .pipe(gulp.dest('release/images/'));
});

// release fonts
gulp.task('release:fonts', function(){
  return gulp.src('fonts/**')
      .pipe(gulp.dest('release/fonts/'));
});

/**
 * reload
 */

// live reload
gulp.task('reload:livereload', function() {
  gulp.src(['*', 'html/*', 'css/*', 'js/*'])
      .pipe( livereload() );
});

// watch
gulp.task('reload:watch', function() {
  livereload.listen();
  gulp.watch('*', ['reload:livereload']);
  gulp.watch('_dev_src/html/**', ['build:include:html', 'reload:livereload']);
  gulp.watch('_dev_src/scss/**', ['build:sass:dev', 'reload:livereload']);
  gulp.watch('_dev_src/js/**', ['build:js:compress', 'reload:livereload']);
});

// run project webserver
gulp.task('webserver', function(){
  gulp.src('./')
      .pipe(webserver({
        livereload: true,
        open: true,
        port:8888
      }));
});

/**
 * run task
 */

// build task
gulp.task('default', ['build:include:html', 'build:sass:dev', 'build:js:compress', 'reload:watch', 'webserver']);

// seperate task
gulp.task('seperate', ['seperate:copy:jsLib', 'seperate:build:fileListJson']);

// release task
gulp.task('release', ['release:html', 'release:sass', 'release:js:compress', 'release:copy:jsLib', 'release:images', 'release:fonts']);