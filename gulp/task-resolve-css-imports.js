const gulp = require('gulp');
const { Transform } = require('stream');

const resolveCss = () =>
    new Transform({
        objectMode: true,
        transform(file, _, callback) {
            const lines = file.contents.toString().split('\n');
            for (let i = 0; i < lines.length; i++) {
                lines[i] = lines[i].replace('.less', '.css');
            }
            file.contents = Buffer.from(lines.join('\n'));
            callback(undefined, file);
        },
    });

const JS_SRC = ['build/**/*.{js,d.ts}'];

function resolveCssImports() {
    return gulp.src(JS_SRC).pipe(resolveCss()).pipe(gulp.dest('build'));
}

module.exports = {
    resolveCssImports,
};
