var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var nib         = require('nib');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['stylus'], function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("src/*.styl", ['stylus']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('stylus', function () {
  gulp.src('./src/triph.styl')
    .pipe(stylus({
      use: [nib()],
      compress: true,
      linenos: false
    }))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['serve']);
