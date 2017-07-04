var gulp = require('gulp');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');
var htmlincluder = require('gulp-htmlincluder');
var concat_css = require('gulp-concat-css');
var csso = require('gulp-csso');

gulp.task('server', function(){
    connect.server({
        root: 'build/',
        livereload: true
    });
});

gulp.task('html', function(){
    gulp.src('dev/**/*.html')
        .pipe(htmlincluder())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: 1
        }))
        .pipe(rename(function(path){
            path.dirname = ''
        }))
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('css', function(){
    gulp.src('dev/assets/css/*.css')
        .pipe(concat_css())
        .pipe(csso())
        .pipe(rename(function(path){
            path.dirname = ''
        }))
        .pipe(gulp.dest('build/css/mystyle.css'))
        .pipe(connect.reload());
})