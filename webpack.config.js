const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, 'src');
const entryPath = path.resolve(rootPath, 'index.jsx');
const outputPath = path.resolve(__dirname, 'dist');
const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    entry: {
        main: entryPath,
    },
    mode: modeEnv,
    output: {
        filename: modeEnv === 'development' ? '[name].js' : '[name]-[chunkhash].js',
        path: outputPath,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8000,
    },
    resolve: {
        alias: {
            root: path.resolve(__dirname, 'src/'),
            components: path.resolve(__dirname, 'src/components/'),
            stories: path.resolve(__dirname, 'src/stories/'),
        },
        extensions: ['.jsx', '.js', '.less', '.css', '.json', '.svg', '.gif', '.jpg'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|otf|svg|gif|jpe?g)$/,
                use: ['url-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
    ],
};
