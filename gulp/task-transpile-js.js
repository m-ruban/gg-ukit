const gulp = require('gulp');
const babel = require('gulp-babel');
const cached = require('gulp-cached');
const babelConfig = require('../babel.config');

const JS_SRC = ['src/**/!(*.test|*.stories|*.utils).{js,jsx,ts,tsx}'];

function transpileJs() {
    return gulp
        .src(JS_SRC, { sourcemaps: true })
        .pipe(cached('js'))
        .pipe(babel(babelConfig))
        .pipe(gulp.dest('build', { sourcemaps: 'maps' }));
}

module.exports = {
    transpileJs,
};
