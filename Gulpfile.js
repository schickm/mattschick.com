'use strict';

var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var svgmin = require('gulp-svgmin');
var livereload = require('gulp-livereload');

function cssFiles (name) {
	return path.join('src/css', name);
}

gulp.task('minify-css', function() {
	return gulp.src([cssFiles('normalize.css'), cssFiles('styles.css')])
		.pipe(sourcemaps.init())
		.pipe(minifyCss())
		.pipe(concat('bundle.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
		.pipe(livereload());
});

gulp.task('minify-svg', function() {
	return gulp.src('src/svg/**/*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest('dist/svg'))
		.pipe(livereload());
});

gulp.task('minify-html', function() {
	return gulp.src('src/*.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/css/**/*.css', ['minify-css']);
	gulp.watch('src/svg/**/*.svg', ['minify-svg']);
	gulp.watch('src/**/*.html', ['minify-html']);
});

gulp.task('default', ['minify-css', 'minify-svg', 'minify-html', 'watch']);