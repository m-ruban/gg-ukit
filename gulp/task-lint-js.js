const gulp = require('gulp');
const eslint = require('gulp-eslint7');
const plumber = require('gulp-plumber');

function lintJs() {
    return gulp
        .src(['./src/**/*.{js,jsx,ts,tsx}', './gulp/**/*.{js,ts}', './gulpfile.js'])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

module.exports = {
    lintJs,
};
