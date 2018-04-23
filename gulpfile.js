var gulp = require('gulp');
var less = require('gulp-less');
var server = require('gulp-webserver');

gulp.task('less', function() {
    gulp.src('./src/static/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./src/static/css/'))
})

gulp.task('server', function() {
    gulp.src('./src')
        .pipe(server({
            port: 2893,
            open: true,
            middleware: function(req, res, next) {
                next();
            }
        }))
})

gulp.task('watch', function() {
    gulp.watch(['./src/static/less/*.less'], ['less'])
})

gulp.task('default', ['less', 'server'], function() {

})