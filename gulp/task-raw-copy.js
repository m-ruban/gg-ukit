const gulp = require('gulp');
const cached = require('gulp-cached');

const FILES_GLOB = ['src/**/*.less', 'src/**/*.woff2'];

function rawCopy() {
    return gulp.src(FILES_GLOB).pipe(cached('copied')).pipe(gulp.dest('build'));
}

module.exports = {
    rawCopy,
};
