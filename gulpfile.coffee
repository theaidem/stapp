
# Imports

gulp 			= require 'gulp'
jade 			= require 'gulp-jade'
coffee 			= require 'gulp-coffee'
stylus 			= require 'gulp-stylus'
nib 				= require 'nib'
sourcemaps 	= require 'gulp-sourcemaps'
plumber 		= require 'gulp-plumber'
browserSync 	= require 'browser-sync'
imagemin 		= require 'gulp-imagemin'
uglify 			= require 'gulp-uglify'
minifyHtml 	= require 'gulp-minify-html'
minifyCss 		= require 'gulp-minify-css'
usemin			= require 'gulp-usemin'
gutil 			= require 'gulp-util'
notify 			= require 'gulp-notify'
changed 		= require 'gulp-changed'
runSequence 	= require 'run-sequence'
del 				= require 'del'
rev 			= require 'gulp-rev'
bower 			= require 'gulp-bower'
gulpIgnore 	= require 'gulp-ignore'
wiredep 		= require('wiredep').stream

# Paths

app = 'app/'
dist = 'dist/'
src 	= {
	jade:'src/jade/'
	coffee:'src/coffee/'
	stylus:'src/stylus/'
}

# Server + Livereload

gulp.task 'browser-sync', ->
	browserSync {
		server: {baseDir: app}
		port: 9000
	}

# gulp.watch bug on new files/deleted files.
# For wather bug:
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
gulp.task 'watch', ->
	gulp.watch "#{src.stylus}**/*.styl", ['stylus', browserSync.reload]
	gulp.watch "#{src.jade}**/*.jade", -> 
		runSequence ['jade'],['injectBower']
	gulp.watch "#{src.coffee}**/*.coffee", ['coffee', browserSync.reload]

# Utils

gulp.task 'clean', (cb) -> del ['output'], cb

gulp.task 'cleanDist', (cb) -> del [dist], cb

gulp.task 'bowerInstall', -> do bower

gulp.task 'injectBower', ->
	gulp.src "#{app}*.html"
		.pipe plumber()
		.pipe wiredep {
			directory: "#{app}bower_components"
			bowerJson: require './bower.json'
			fileTypes: {
				html: {
					replace: {
						js: '<script src="/{{filePath}}"></script>'
						css: '<link rel="stylesheet" href="/{{filePath}}" />'
					}
				}
			}
		}
		.on 'error', gutil.log
		.on 'error', gutil.beep
		.on 'error', notify.onError 'Error: <%= error.message %>'
		.pipe gulp.dest(app)
		.pipe browserSync.reload({stream:yes})

gulp.task 'copy', ->
	gulp.src ["#{app}**", "!#{app}", "!#{app}bower_components/**", "!#{app}bower_components", "!#{app}/js/**", "!#{app}/css/**", "!#{app}/img/**", "!#{app}*.html"]
		.pipe plumber()
		.pipe gulp.dest(dist)

# Compilations

gulp.task 'stylus', ['clean'], ->
	gulp.src "#{src.stylus}main.styl"
		.pipe plumber()
		.pipe( stylus( { use: [ nib() ], sourcemap: {inline: true} } ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe( gulp.dest("#{app}/css/") )    
		.pipe( notify({ onLast: true, message:'Stylus compile with success!'}) )

gulp.task 'coffee', ['clean'], ->
	gulp.src "#{src.coffee}**/*.coffee"
		.pipe plumber()
		.pipe( changed("#{app}/js/", {extension: '.js'}))
		.pipe( sourcemaps.init())
		.pipe( coffee( {bare: true, sourcemap: {inline: true}} ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest("#{app}/js/" ) )    
		.pipe( notify({ onLast: true, message:'Coffee compile with success!' }) )

gulp.task 'jade', ['clean'], ->
	gulp.src "#{src.jade}**/*.jade"
		.pipe plumber()
		.pipe( changed(app, {extension: '.html'}))
		.pipe( jade( {pretty: true} ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe( notify({ onLast: true, message:'Jade compile with success!' }) )
		.pipe( gulp.dest( app ) )


# Minifications

gulp.task 'imagemin', ->
	gulp.src "#{app}img/**/*.*"
		.pipe plumber()
		.pipe(imagemin({optimizationLevel: 7}))
		.pipe(gulp.dest(app))

gulp.task 'usemin', ->
	gulp.src "#{app}*.html"
		.pipe plumber()
		.pipe( usemin({
			js: [uglify(), rev()]
			css: [minifyCss()]
			html: [minifyHtml({empty: true})]
		})).pipe( gulp.dest(dist) )

# Main tasks

gulp.task 'compile', (callback) ->
	runSequence [ 'bowerInstall', 'stylus', 'coffee', 'jade' ], callback

gulp.task 'build', (callback) ->
	runSequence ['cleanDist','compile'], ['injectBower'], ['usemin','imagemin'],['copy'], callback

gulp.task 'default', (callback) ->
	runSequence ['compile'], ['injectBower'], ['browser-sync'], ['watch'], callback
