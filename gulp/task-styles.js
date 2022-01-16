const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

function stylelint() {
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
    stylelint,
};
