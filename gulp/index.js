const gulp = require('gulp');
const { lintJs } = require('./task-lint-js');
const { jsBuild } = require('./task-build-js');
const { stylelint } = require('./task-styles');
const { clean } = require('./task-clean');
const { rawCopy } = require('./task-raw-copy');

gulp.task('clean', clean);
gulp.task('lint', gulp.parallel(lintJs, stylelint));
gulp.task('js-build', jsBuild);
gulp.task('raw-copy', rawCopy);
