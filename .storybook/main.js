const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { LessPluginModuleResolver } = require('less-plugin-module-resolver');

function useLessLoader(config, handleLessRule) {
    const cssModel = config.module.rules.find(i => i.test.toString() === "/\\.css$/")
    let lessRule = {
        test: /\.less$/,
        sideEffects: true,
        use: [
            ...cssModel.use,
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        plugins: [
                            new LessPluginModuleResolver({
                                alias: {
                                    'gg-ukit/styles': 'src/styles',
                                },
                            }),
                        ],
                    },
                }
            }
        ]
    }
    if (handleLessRule) lessRule = handleLessRule(lessRule)
    config.module.rules.push(lessRule)
    return config
}

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
    staticDirs: ['../public', '../src/styles/woff'],
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
