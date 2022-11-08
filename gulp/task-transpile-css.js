const gulp = require('gulp');
const cached = require('gulp-cached');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const { Transform } = require('stream');

const filterEmptyFile = () =>
    new Transform({
        objectMode: true,
        transform(file, _, callback) {
            if (file.contents.length > 0) {
                this.push(file);
            }
            callback();
        },
    });

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
