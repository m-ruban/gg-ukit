const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { LessPluginModuleResolver } = require('less-plugin-module-resolver');

module.exports = {
    framework: {
        name: '@storybook/react-webpack5',
        options: { legacyRootApi: true },
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
    staticDirs: ['../public', '../src/styles/woff'],
    typescript: { reactDocgen: 'react-docgen-typescript' },
    webpackFinal: async (config) => {
        config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];
        config.module.rules.push(
            {
                test: /\.[jt]sx?$/,
                include: path.resolve(__dirname, '../src'),
                use: ['babel-loader'],
            },
            {
                test: /\.less$/,
                sideEffects: true,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                plugins: [
                                    new LessPluginModuleResolver({
                                        alias: {
                                            'gg-ukit/styles': path.resolve(__dirname, '../src/styles'),
                                        },
                                    }),
                                ],
                            },
                        },
                    },
                ],
            }
        );
        return config;
    },
};
