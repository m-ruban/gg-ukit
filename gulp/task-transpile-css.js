const gulp = require('gulp');
const cached = require('gulp-cached');
const less = require('gulp-less');
const { LessPluginModuleResolver } = require('less-plugin-module-resolver');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const { filterEmptyFile } = require('./utils/streamTransform');

const CSS_SRC = ['src/**/*.{css,less}'];

function transpileCss() {
    return gulp
        .src(CSS_SRC)
        .pipe(cached('css'))
        .pipe(
            less({
                plugins: [
                    new LessPluginModuleResolver({
                        alias: {
                            'gg-ukit/styles': 'src/styles',
                        },
                    }),
                ],
            })
        )
        .pipe(postcss([cssnano()]))
        .pipe(filterEmptyFile())
        .pipe(gulp.dest('build'));
}

module.exports = {
    transpileCss,
};
