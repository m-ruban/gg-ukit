const gulp = require('gulp');
const { replace } = require('./utils/streamTransform');

const lessImportTemplate = /^((require|import\s)\(?['"].+)\.less(['"]\)?;)$/gm;
const cssExtensionTemplate = '$1.css$3';

const JS_SRC = ['build/**/*.{js,d.ts}'];

function resolveCssImports() {
    return gulp.src(JS_SRC).pipe(replace(lessImportTemplate, cssExtensionTemplate)).pipe(gulp.dest('build'));
}

module.exports = {
    resolveCssImports,
};
