'use strict';
var gulp = require('gulp'),
watch    = require('gulp-watch'),
sass     = require('gulp-sass'),
debug    = require('gulp-debug'),
browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('./assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function(){

  browserSync.init({
    server: {
      baseDir: './'    
    }
  })

  //watch index html file and triger html task
  watch('index.html', function(){
    browserSync.reload();
  })
  //watch all scss files and recompile to main.css
  watch('assets/css/**/*.scss', function(){
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['sass'],function(){
  return gulp.src('./assets/css/main.css').
    pipe(browserSync.stream());
});