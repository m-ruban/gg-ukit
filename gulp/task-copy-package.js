const { mkdir, readFile, writeFile } = require('node:fs/promises');

async function copyPackage() {
    const json = JSON.parse(await readFile('package.json', 'utf8'));
    delete json.scripts.postinstall;
    await mkdir('build', { recursive: true });
    await writeFile('build/package.json', `${JSON.stringify(json, null, 2)}\n`);
}

module.exports = {
    copyPackage,
};
