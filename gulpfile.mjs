import gulp from 'gulp';
import browserSyncModule from 'browser-sync';
import prefix from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';

const browserSync = browserSyncModule.create();
const sass = gulpSass(dartSass);

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 8000
  });
  done();
}

function buildSass() {
  return gulp
    .src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch('scss/**/*.scss', buildSass);
  gulp.watch('*.html').on('change', browserSync.reload);
}

export { buildSass as sass, serve };
export default gulp.series(buildSass, serve, watch);
