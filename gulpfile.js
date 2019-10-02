var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' ).create();

function styles() {
	return gulp.src( './styles/**/*.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( 'styles/') )
		.pipe( browserSync.stream() );
}

function reload(done) {
	browserSync.reload();
	done();
}

function serve() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch( './index.html', gulp.series(reload) );
	gulp.watch( './styles/**/*.scss', gulp.series(styles) );
	gulp.watch( '*.js', gulp.series(reload) );
}

exports.reload = reload;
exports.styles = styles;
exports.serve = serve;

exports.default = serve;
