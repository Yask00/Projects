const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const sassLint = require('gulp-sass-lint');
const gulpsync = require('gulp-sync')(gulp);

// CLEAN DIST
gulp.task('clean', () => {
    return del('dist');
});

// LOAD IMGs HTMLs HANDLEBARs
gulp.task('load:static', [], function() {
  gulp.src(["src/img/**.*"])
      .pipe(gulp.dest('dist/img'));
  gulp.src(["src/templates/**.*"])
      .pipe(gulp.dest('dist/templates'));
  gulp.src(["src/**.json"])
      .pipe(gulp.dest('dist'));
  gulp.src(["src/**.html"])
      .pipe(gulp.dest('dist'));
});

// LINT COMPILE SASS
gulp.task('lint:sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('compile:sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

// LINT COMPILE JAVASCRIPT
gulp.task('lint:js', () => {
    return gulp.src(['src/**/*.js', '!node_module/**s', '!src/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('compile:js', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(
            gulp.dest('dist')
        );
});

// AllIN

gulp.task('lint', ['lint:sass', 'lint:js']);
gulp.task('compile', ['compile:sass', 'compile:js']);

gulp.task('build', gulpsync.sync(['clean', 'load:static', 'lint', 'compile']));