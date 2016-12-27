'use strict'

//GLOBALS
	const gulp = require('gulp');
	const gulpLoadPlugins = require('gulp-load-plugins');
	const $ = gulpLoadPlugins();
	const browserSync = require('browser-sync').create();
	const gulpif = require('gulp-if');
	const gutil = require("gulp-util")
	const babel = require('gulp-babel');
	const source = require("vinyl-source-stream")
	const browserify = require("browserify");
	const buffer = require("vinyl-buffer");
	const babelify = require("babelify");
	const watchify = require("watchify");
	let pathToFiles;
	let backEndFolder;

//Edit these two files to switch to different projects
const end = `Front End`;
const folder = `Teach-Binary`;

//COMMAN+++++++++++++++++++++++++++++++++++++++++++COMMAN+++++++++++++++++++++++++++++++++++++++++++COMMAN

	end === 'Back End' ? pathToFiles = (`${end}/${folder}/public`) : pathToFiles = `.`;
	backEndFolder = `./`;
	const dirCore = end + backEndFolder;
	const condition = file => end === 'Back End' ? true : false;

	gulp.task('default', end === 'Back End' ? ['devback'] : ['devfront']);

	//------------------------Development

		//Jade
			gulp.task('jade', () => {
				return gulp.src(`${pathToFiles}/jade/*.jade`)
					.pipe($.sourcemaps.init())
						.pipe($.jade({pretty:true}))
					.pipe($.sourcemaps.write())
					.pipe($.htmlmin({collapseWhitespace: true}))
					.pipe(gulpif(condition, gulp.dest(dirCore + '/tmp'), gulp.dest(pathToFiles + '/tmp')))
			});

		//Sass
			gulp.task('sass', () => {
				return gulp.src(pathToFiles + '/sass/index.sass')
					.pipe($.sourcemaps.init())
					.pipe($.sass.sync().on('error', $.sass.logError))
					.pipe($.sourcemaps.write())
					.pipe($.cssmin({compatibility: 'ie8'}))
					.pipe(gulpif(condition, gulp.dest(dirCore + '/tmp'), gulp.dest(pathToFiles + '/tmp')))
					.pipe(browserSync.reload({stream: true}))
			});

		//Javascript- Gulp with Browserify
			gulp.task('scripts', bundle);

			let b = watchify(browserify(pathToFiles + "/js/index.js", watchify.args))
			b.on('update', bundle);
			b.transform("babelify", {presets: ["es2015"]});

			function bundle() {
				return b.bundle()
					.on('error', function(err) {
	            		if (err instanceof SyntaxError) {
	                  		gutil.log(gutil.colors.red('Syntax Error'));
	                  		console.log(err.message);
	                  		console.log(`${err.filename}:${err.loc.line}`);
	                  		console.log(err.codeFrame);
	            		} else {
	                  		gutil.log(gutil.colors.red('Error'), err.message);
	            		}
	            		this.emit('end');
	      			})
					.pipe(source("scripts.js"))
					.pipe(buffer())
					.pipe($.uglify({compress: {drop_console: true}}))
					.pipe(gulp.dest('./tmp'))
			}

		/*
		//Javascript- Gulp with Webpack(gulp-webpack)
			gulp.task('scripts', () => {
				return gulp.src(pathToFiles + '/js/index.js')
					.pipe($.sourcemaps.init())
  						.pipe($.webpack(require('./webpack.config.js')))
  					.pipe($.sourcemaps.write())
  					.pipe(gulp.dest(dirCore + '/tmp'))
			});



		//Javascript - Gulp with Bower [Enable ContactJS]
			gulp.task('scripts', () => {
				return gulp.src([pathToFiles + '/js/index.js', pathToFiles + '/js/*.js'])
					.pipe($.sourcemaps.init())
						.pipe($.babel({ presets: ['es2015', 'react']})) //Added babel
						.pipe($.plumber())
					.pipe($.sourcemaps.write())
					.pipe(gulpif(condition, gulp.dest(dirCore + '/tmp/js'), gulp.dest(pathToFiles + '/tmp/js')));
			});
		*/

//BACK END+++++++++++++++++++++++++++++++++++++++++++BACK END+++++++++++++++++++++++++++++++++++++++++++BACK END

	//------------------------Development

		//Watch changes for JS, SASS, JS and JSX
			gulp.task('watchback', function () {
				gulp.watch(pathToFiles + '/sass/*.sass', ['sass']);
				gulp.watch(pathToFiles + '/jade/*.jade').on('change', browserSync.reload);
				gulp.watch(pathToFiles + '/js/**/*.js', ['scripts']);
				gulp.watch(dirCore + '/tmp/scripts.js').on('change', () => setTimeout(() =>browserSync.reload(), 220));
			});

		//Starts the server proxied from the orignal server to serve live preview of files
			gulp.task('devback', ['scripts','sass', 'watchback', 'jade'], function () {
				browserSync.init({
					notify: false,
					proxy: 'localhost:9000',
					port: 3000,
					open: false,
			        ui: false,
			        ghostMode: false
				});
			});

		//Contacts JS files into one file and convers ES6 to ES5
			gulp.task('concatJsBack', ['scripts'], () => {
				return gulp.src([dirCore + '/tmp/js/index.js', dirCore + + '/tmp/js/*.js',])
					.pipe($.concat('scripts.js'))
					.pipe(gulp.dest(dirCore + '/tmp'))
			});

	//------------------------Testing

		//See the result of the final product
			gulp.task('serve:back', ['mincssBack', 'minjsBack'], () => {
				browserSync.init({
					notify: false,
					proxy: 'localhost:9000',
					port: 3000,
					open: false,
					ui: false,
					ghostMode: false
				});
			});

		//Minify and concat css
			gulp.task('mincssBack', () => {
				return gulp.src(dirCore + '/tmp/*.css')
					.pipe($.cssmin({compatibility: 'ie8'}))
					.pipe($.autoprefixer(autoprefixerOptions))
					.pipe(gulp.dest(dirCore + '/dest'))
			});

		//Javascript concat and minify
			gulp.task('minjsBack', () => {
				return gulp.src(dirCore + '/tmp/*.js')
					.pipe($.uglify({compress: {drop_console: true}}))
					.pipe(gulpif(condition, gulp.dest('./dest'), gulp.dest('./dest')));
			});

//FRONT END+++++++++++++++++++++++++++++++++++++++++++FRONT END+++++++++++++++++++++++++++++++++++++++++++FRONT END

	//------------------------Development

		//Starts the server for live preview of files
			gulp.task('devfront', ['watchfront'], function () {
				browserSync.init({
					notify: true,
					port: 3000,
					server: pathToFiles + '/tmp'
				});
			});

		//Watch changes for JS, SASS, JS and JSX
			gulp.task('watchfront', ['scripts','sass', 'jade'], function () {
				gulp.watch(pathToFiles + '/sass/*.sass', ['sass']);
				gulp.watch(pathToFiles + '/js/*.js', ['scripts']);
				gulp.watch(pathToFiles + '/jade/*.jade', ['jade']);
				gulp.watch([
					pathToFiles + '/tmp/*.html',
					pathToFiles + '/tmp/scripts.js'
				]).on('change', browserSync.reload);
			});