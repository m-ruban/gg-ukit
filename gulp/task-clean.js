const { rm } = require('node:fs/promises');

async function clean() {
    await Promise.all(
        ['build', 'storybook-static'].map((directory) => rm(directory, { recursive: true, force: true }))
    );
}

module.exports = {
    clean,
};
