const gulp = require('gulp');
const cached = require('gulp-cached');

const FILES_GLOB = ['src/**/*.woff', 'src/**/*.svg', './README.md'];

function rawCopy() {
    return gulp.src(FILES_GLOB).pipe(cached('copied')).pipe(gulp.dest('build'));
}

module.exports = {
    rawCopy,
};
