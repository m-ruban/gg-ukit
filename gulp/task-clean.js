const del = require('del');

function clean(callback) {
    del(['./build/**', '!./build', '!./build/.gitkeep']).then(() => {
        callback();
    });
}

module.exports = {
    clean,
};
