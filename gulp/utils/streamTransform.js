const { Transform } = require('stream');

const filterEmptyFile = () =>
    new Transform({
        objectMode: true,
        transform(file, _, callback) {
            if (file.contents.length > 0) {
                this.push(file);
            }
            callback();
        },
    });

const replace = (searchValue, replaceValue) =>
    new Transform({
        objectMode: true,
        transform(chunk, _, callback) {
            const content = chunk.contents.toString();
            const resolvedContent = content.replace(searchValue, replaceValue);
            chunk.contents = Buffer.from(resolvedContent);
            callback(undefined, chunk);
        },
    });

module.exports = {
    replace,
    filterEmptyFile,
};
