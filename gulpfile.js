const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const $ = require('jquery');

// Copy all HTML files
gulp.task('copyHTML', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imagemin', () =>
  gulp.src('src/images/**/*')
    .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
          .pipe(gulp.dest("dist/css"))
            .pipe(browserSync.stream());
});

// Move the javascript files into our /dist/js folder
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
      .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

// Concat JS Files + JQuery
gulp.task('jquery', () => {
    gulp.src('src/js/*.js')
      .pipe(concat('index.js'))
          .pipe(gulp.dest('dist/js'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "dist"
    });

    gulp.watch('src/js/*.js', ['jquery', 'js']);
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch('src/images/*', ['imagemin']);
    gulp.watch("src/*.html", ['copyHTML']).on('change', browserSync.reload);
});

gulp.task('default', ['copyHTML', 'jquery', 'js', 'imagemin', 'serve']);
