const del = require('del');

function clean(callback) {
    del(['./build/**', './storybook-static/**']).then(() => {
        callback();
    });
}

module.exports = {
    clean,
};
