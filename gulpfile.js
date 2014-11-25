var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	compass = require('gulp-compass'),
	clean = require('gulp-clean');

var vendorFiles = [
				"bower_components/angular/angular.js",
				"bower_components/jquery/dist/jquery.js",
				"bower_components/angular/angular.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js",
				"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js",
				"bower_components/angular-resource/angular-resource.js",
				"bower_components/angular-cookies/angular-cookies.js",
				"bower_components/angular-sanitize/angular-sanitize.js",
				"bower_components/angular-animate/angular-animate.js",
				"bower_components/angular-touch/angular-touch.js",
				"bower_components/angular-route/angular-route.js",
				"bower_components/angular-uuid4/angular-uuid4.js",
				"bower_components/ng-lodash/build/ng-lodash.js"];

// JSHint task
gulp.task('lint', function() {
	gulp.src('./app/scripts/*.js')
	.pipe(jshint())
	// You can look into pretty reporters as well, but that's another story
	.pipe(jshint.reporter('default'));
});

// Browserify task
gulp.task('browserify', function() {
	// Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
	gulp.src(['app/scripts/app.js', 'app/scripts/services/*.js', 'app/scripts/controllers/*.js'])
	// .pipe(browserify({
	// 	insertGlobals: true,
	// 	debug: true
	// }))
	// Bundle to a single file
	.pipe(concat('main.js'))
	// Output it to our dist folder
	.pipe(gulp.dest('dist/js'));
});

gulp.task('vendor', function(){
	gulp.src(vendorFiles)
		.pipe(concat('vendor.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('compass', function() {
	gulp.src('./app/styles/scss/*.scss')
	    .pipe(compass({
			css: './app/styles/css',
			sass: './app/styles/scss',
			image: './app/images'
	    }))
	    .pipe(concat('main.css'))
	    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', function(){
	gulp.run(['vendor', 'compass', 'browserify']);
});

gulp.task('watch', ['lint'], function() {
	// Watch our scripts
	gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
		'lint',
		'browserify'
	]);
});

gulp.task('default', function(){
	gulp.run(['build', 'watch'])
});
