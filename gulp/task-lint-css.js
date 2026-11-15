async function lintCss() {
    const { default: stylelint } = await import('stylelint');
    const result = await stylelint.lint({ files: 'src/**/*.less', formatter: 'string' });
    if (result.report) {
        process.stdout.write(result.report);
    }
    if (result.errored) {
        throw new Error('Stylelint found errors');
    }
}

module.exports = {
    lintCss,
};
