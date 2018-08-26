var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('check', function() {
    return gulp.src(['*', 'js/*', 'css/*', 'html/*'])
        .pipe(livereload());
});
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('*', ['check']);
    gulp.watch('js_src/**', ['concat', 'copy', 'check']);
    gulp.watch('css_scss/**', ['sass', 'check']);
    gulp.watch('html_src/**', ['include', 'check']);
});

gulp.task('include', function(){

    var main = gulp.src(['html_src/*.html'])
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('html/'));

    var sub = gulp.src(['html_src/sub/*.html'])
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('html/sub/'));

});

gulp.task('sass', function(){
    return gulp.src('css_scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'));
});

gulp.task('concat', function() {
    return gulp.src('js_src/*.js')
        .pipe(concat('function.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('copy', function () {
    return gulp.src('js_src/lib/**')
        .pipe(gulp.dest('js/lib/'));
});

gulp.task('webserver', function(){
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            port:8888
        }))
});

gulp.task('default', ['check', 'watch', 'include', 'sass', 'concat', 'copy', 'webserver']);