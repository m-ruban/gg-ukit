const gulp = require('gulp');
const cached = require('gulp-cached');
const editor = require('gulp-json-editor');

function copyPackage() {
    return gulp
        .src(['package.json'])
        .pipe(cached('copied'))
        .pipe(
            editor(function (json) {
                delete json.scripts.postinstall;
                return json;
            })
        )
        .pipe(gulp.dest('build'));
}

module.exports = {
    copyPackage,
};
