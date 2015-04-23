var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css');

gulp.task('sass', function() {
  return sass('scss/slicknav.scss')
  .on('error', function(err) { console.error('Error!', err.message); })
  .pipe(gulp.dest('dist'))
  .pipe(minify({compatibility: 'ie8'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('js', function() {
  return gulp.src('jquery.slicknav.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify({preserveComments: 'some'}))
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass','js']);