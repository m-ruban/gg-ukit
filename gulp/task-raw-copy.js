const gulp = require('gulp');
const cached = require('gulp-cached');

const FILES_GLOB = ['src/**/styles/**/*.less', 'src/**/*.woff', 'src/**/*.svg', './README.md'];

function rawCopy() {
    return gulp
        .src(FILES_GLOB, { encoding: false })
        .pipe(cached('copied'))
        .pipe(gulp.dest('build', { encoding: false }));
}

module.exports = {
    rawCopy,
};
