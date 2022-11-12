const gulp = require('gulp');
const { Transform } = require('stream');

const lessImportTemplate = /^((require|import\s)\(?['"].+)\.less(['"]\)?;)$/gm;

const resolveCss = () =>
    new Transform({
        objectMode: true,
        transform(chunk, _, callback) {
            const content = chunk.contents.toString();
            const resolvedContent = content.replace(lessImportTemplate, '$1.css$3');
            chunk.contents = Buffer.from(resolvedContent);
            callback(undefined, chunk);
        },
    });

const JS_SRC = ['build/**/*.{js,d.ts}'];

function resolveCssImports() {
    return gulp.src(JS_SRC).pipe(resolveCss()).pipe(gulp.dest('build'));
}

module.exports = {
    resolveCssImports,
};
