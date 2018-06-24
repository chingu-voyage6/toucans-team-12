var gulp = require('gulp'),
watch    = require('gulp-watch'),
sass     = require('gulp-sass'),
debug    = require('gulp-debug');

gulp.task('html', function() {
  console.log("html task");
})

gulp.task('css', function() {
  console.log("css task");
})

gulp.task('sass', function(){
  console.log("acctual sass task");
  return gulp.src('./assets/css/**/*.scss')
    .pipe(debug())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task('watch', function(){
  //watch index html file and triger html task
  watch('index.html', function(){
    gulp.start('html');
  })
  watch('assets/css/**/*.scss', function (){
    gulp.start('sass');
    console.log("sass-task completed");
  });
});