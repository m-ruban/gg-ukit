const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const cached = require('gulp-cached');
const babelConfig = require('../babel.config');

const JS_SRC = ['src/**/!(*.test|*.stories|*.utils).{js,jsx,ts,tsx}'];

function jsBuild() {
    return gulp
        .src(JS_SRC)
        .pipe(cached('js'))
        .pipe(sourcemaps.init())
        .pipe(babel(babelConfig))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('build'));
}

module.exports = {
    jsBuild,
};
