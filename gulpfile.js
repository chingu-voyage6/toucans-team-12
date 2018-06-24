'use strict';
var gulp = require('gulp'),
watch    = require('gulp-watch'),
sass     = require('gulp-sass'),
debug    = require('gulp-debug');

gulp.task('html', function() {
  console.log("html task");
})

gulp.task('sass', function(){
  return gulp.src('./assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function(){
  //watch index html file and triger html task
  watch('index.html', function(){
    gulp.start('html');
  })
  //watch all scss files and recompile to main.css
  watch('assets/css/**/*.scss', function(){
    gulp.start('sass');
  });
});
