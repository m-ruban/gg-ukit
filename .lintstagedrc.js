module.exports = {
    '*.less': ['yarn stylelint --fix'],
    '*.{js,jsx,ts,tsx}': ['eslint --fix'],
    '*.{ts,tsx,d.ts}': () => "bash -c 'yarn ts-check'",
}
