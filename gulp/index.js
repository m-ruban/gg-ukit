const gulp = require('gulp');
const { clean } = require('./task-clean');
const { lintJs } = require('./task-lint-js');
const { lintCss } = require('./task-lint-css');
const { transpileJs } = require('./task-transpile-js');
const { resolveCssImports } = require('./task-resolve-css-imports');
const { transpileCss } = require('./task-transpile-css');
const { rawCopy } = require('./task-raw-copy');
const { copyPackage } = require('./task-copy-package');

gulp.task('clean', clean);
gulp.task('lint', gulp.parallel(lintJs, lintCss));
gulp.task('transpile', gulp.parallel(gulp.series(transpileJs, resolveCssImports), transpileCss));
gulp.task('raw-copy', rawCopy);
gulp.task('copy-package', copyPackage);
