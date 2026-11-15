const gulp = require('gulp');
const eslint = require('gulp-eslint-new');

function lintJs() {
    return gulp
        .src(['./src/**/*.{js,jsx,ts,tsx}', './gulp/**/*.{js,ts}', './gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

module.exports = {
    lintJs,
};
