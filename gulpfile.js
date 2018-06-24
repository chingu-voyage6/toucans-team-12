var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  // place code for your default task here
  console.log("gulp runningas");
});

gulp.task('html', function() {
  console.log("html task");
})

gulp.task('watch', function(){
  watch('index.html', function(){
    gulp.start('html');
  })
})