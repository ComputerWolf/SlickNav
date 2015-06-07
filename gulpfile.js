var pkg = require('./package.json'),
    gulp = require('gulp'),
    header = require('gulp-header'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css');
    banner = ['/*!',
            ' * SlickNav Responsive Mobile Menu v<%= pkg.version %>',
            ' * (c) <%= new Date().getFullYear() %> <%= pkg.author.name %>',
            ' * licensed under <%= pkg.licenses[0].type %>',
            ' */',
            ''].join('\n');

gulp.task('sass', function() {
  return sass('scss/slicknav.scss')
  .on('error', function(err) { console.error('Error!', err.message); })
  .pipe(header(banner, { pkg : pkg } ))
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
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('dist'))
    .pipe(uglify({preserveComments: 'some'}))
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass','js']);
