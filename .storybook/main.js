const path = require('path');
const useLessLoader = require('storybook-less-loader');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-docs",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve?.alias,
            root: path.resolve(__dirname, 'src/'),
            components: path.resolve(__dirname, 'src/components/'),
        };
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        return useLessLoader(config);
    }
}
