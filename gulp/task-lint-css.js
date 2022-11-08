const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

function lintCss() {
    return gulp.src(['src/**/*.less']).pipe(
        gulpStylelint({
            syntax: 'less',
            reporters: [
                {
                    formatter: 'string',
                    console: true,
                },
            ],
        })
    );
}

module.exports = {
    lintCss,
};
