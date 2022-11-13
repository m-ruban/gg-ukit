const gulp = require('gulp');
const cached = require('gulp-cached');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const { filterEmptyFile } = require('./utils/streamTransform');

const CSS_SRC = ['src/**/*.{css,less}'];

function transpileCss() {
    const postcssPlugins = [cssnano()];
    return gulp
        .src(CSS_SRC)
        .pipe(cached('css'))
        .pipe(less())
        .pipe(postcss(postcssPlugins))
        .pipe(filterEmptyFile())
        .pipe(gulp.dest('build'));
}

module.exports = {
    transpileCss,
};
