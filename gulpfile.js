/**
 * @author Max Kokorin / @theaidem
 * @commands :
 * - 'gulp' for testing your webapp
 * - 'gulp compile' for compiling only
 * - 'gulp build' for building final files
 */


// Imports

var gulp 			= require('gulp'),
	jade 			= require('gulp-jade'),
	coffee 			= require('gulp-coffee'),
	stylus 			= require('gulp-stylus'),
	nib 				= require('nib'),
	sourcemaps 	= require('gulp-sourcemaps'),
	
	plumber 		= require('gulp-plumber'),
	
	browserSync 	= require('browser-sync'),
	
	imagemin 		= require('gulp-imagemin'),
	uglify 			= require('gulp-uglify'),
	minifyHtml 	= require('gulp-minify-html'),
	minifyCss 		= require('gulp-minify-css'),
	usemin			= require('gulp-usemin'),

	gutil 			= require('gulp-util'),
	notify 			= require('gulp-notify'),
	changed 		= require('gulp-changed'),
	runSequence 	= require('run-sequence'),
	del 				= require('del'),
	rev 			= require('gulp-rev'),
	bower 			= require('gulp-bower'),
	wiredep 		= require('wiredep').stream,
	gulpIgnore 	= require('gulp-ignore');


// Paths

var app = 'app/',
	dist = 'dist/',
	src = {
		jade:'src/jade/',
		coffee:'src/coffee/',
		stylus:'src/stylus/'
	};


// Server + Livereload

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: app
		},
		port: 9000
	});
});

// gulp.watch bug on new files/deleted files.
gulp.task( 'watch', function() {
	gulp.watch( src.stylus+'**/*.styl', ['stylus', browserSync.reload]);
	gulp.watch( src.jade+'**/*.jade', function(){runSequence(['jade'],['injectBower'])} );
	gulp.watch( src.coffee+'**/*.coffee', ['coffee', browserSync.reload]);
} );


// Utils

gulp.task('clean', function(cb) {
	del(['output'], cb);
});

gulp.task('cleanDist', function(cb) {
	del([dist], cb);
});

gulp.task('bowerInstall', function() {
	return bower();
});

gulp.task('injectBower', function(){
	return gulp.src(app+'*.html')
		.pipe(plumber())
		.pipe(wiredep({
			directory: app+'bower_components',
			bowerJson: require('./bower.json')
		}))
		.on( 'error', gutil.log )
		.on( 'error', gutil.beep )
		.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe(gulp.dest(app))
		.pipe(browserSync.reload({stream:true}));
})

gulp.task('copy', function() {
	return gulp.src([app+'**', '!'+app, '!'+app+'bower_components/**', '!'+app+'bower_components', '!'+app+'/js/**', '!'+app+'/css/**', '!'+app+'/img/**','!'+app+'*.html'])
		.pipe(plumber())
		.pipe(gulp.dest(dist));
});


// Compilations

gulp.task( 'stylus', ['clean'], function() {
	return gulp.src( src.stylus+'main.styl' )
		.pipe(plumber())
		.pipe( stylus( { use: [ nib() ], sourcemap: {inline: true} } ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe( gulp.dest( app+'/css/' ) )    
		.pipe( notify({ onLast: true, message:'Stylus compile with success!'}) );
} );

gulp.task( 'coffee', ['clean'], function() {
	return gulp.src( src.coffee+'**/*.coffee' )
		.pipe(plumber())
		.pipe( changed(app+'/js/' , {extension: '.js'}))
		.pipe( sourcemaps.init())
		.pipe( coffee( {bare: true, sourcemap: {inline: true}} ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( app+'/js/' ) )    
		.pipe( notify({ onLast: true, message:'Coffee compile with success!' }) );
} );

gulp.task( 'jade', ['clean'], function() {
	return gulp.src( src.jade+'**/*.jade' )
		.pipe(plumber())
		.pipe( changed(app, {extension: '.html'}))
		.pipe( jade( {pretty: true} ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe( notify({ onLast: true, message:'Jade compile with success!' }) )
		.pipe( gulp.dest( app ) );
} );


// Minifications

gulp.task('imagemin', function(){
	return gulp.src( app+'img/**/*.*' )
		.pipe(plumber())
		.pipe(imagemin({optimizationLevel: 7}))
		.pipe(gulp.dest(app));
});

gulp.task('usemin', function() {
	return gulp.src(app+'*.html')
		.pipe(plumber())
		.pipe( usemin({
			css: [minifyCss()],
			html: [minifyHtml({empty: true})],
			js: [uglify(), rev()]
		}))
		.pipe( gulp.dest(dist) );
});


// Main tasks

gulp.task( 'compile', function(callback){
	runSequence([ 'bowerInstall', 'stylus', 'coffee', 'jade' ],callback); 
});

gulp.task( 'build', function(callback) { 
	runSequence(['cleanDist','compile'], ['injectBower'], ['usemin','imagemin'],['copy'], callback) 
});

gulp.task( 'default', function(callback) {
	runSequence(['compile'], ['injectBower'], ['browser-sync'], ['watch'], callback)
});