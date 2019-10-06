var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' ).create();

var del = require( 'del' );
var rev = require( 'gulp-rev' );
var revRewrite = require( 'gulp-rev-rewrite' );

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

function revision(){
	return gulp.src( './styles/main.css' )
		.pipe( rev() )
		.pipe( gulp.dest( 'styles' ) )
		.pipe( rev.manifest() )
		.pipe( gulp.dest( 'styles' ) )
}
function revdel(){
	return del( ['styles/main-*.css'] );
}
function revwrite(){
	var manifest = gulp.src( 'styles/rev-manifest.json' );

	return gulp.src( '**/*.html' )
		.pipe( revRewrite( { manifest } ) )
		.pipe( gulp.dest( './' ) )
}

exports.reload = reload;
exports.styles = styles;
exports.serve = serve;
exports.revision = revision;
exports.revwrite = revwrite;

exports.default = serve;
exports.revise = gulp.series( revdel, revision, revwrite );
