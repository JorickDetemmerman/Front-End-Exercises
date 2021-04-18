var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//Watch
gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
  gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
  gulp.watch('app/*.html').on('change', browserSync.reload);;
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);;
});

//SCSS to CSS
gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
