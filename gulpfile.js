var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass');



gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 8000,
    browser: 'firefox'
  });
})

gulp.task('sass', function() {
  return gulp
    .src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false,
      remove: true
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
})

// run everything via "gulp"
gulp.task('default', ['serve', 'sass'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
});
