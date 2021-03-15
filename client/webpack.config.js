const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'public');

module.exports = (env) => {
    const currentPath = path.join(__dirname);
    const basePath = `${currentPath}/.env`;
    const envPath = `${basePath}.${env.ENVIRONMENT}`;
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;
    const fileEnv = dotenv.config({ path: finalPath }).parsed;
    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});
    return {
        entry: SRC_DIR + '/index.js',
        output: {
            path: DIST_DIR,
            filename: 'bundle.js',
        },
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: DIST_DIR,
            compress: true,
            port: 8085,
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                },
                {
                    test: /\.(scss)$/,
                    exclude: /assets\\styles\\sass/,
                    use: [
                        {
                            loader: 'style-loader', // inject CSS to page
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    // sourceMap: true,
                                    // importLoaders: 1,
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            }, // translates CSS into CommonJS modules
                        },
                        {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins() {
                                    // post css plugins, can be exported to postcss.config.js
                                    return [require('precss'), require('autoprefixer')];
                                },
                            },
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                        },
                    ],
                },
                {
                    test: /\.(scss)$/,
                    include: /assets\\styles\\sass/,
                    use: [
                        {
                            loader: 'style-loader', // inject CSS to page
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins() {
                                    // post css plugins, can be exported to postcss.config.js
                                    return [require('precss'), require('autoprefixer')];
                                },
                            },
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    include: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
                {
                    test: /\.less$/,
                    include: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.less$/,
                    include: /assets\\styles\\less/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jp(e*)g|gif|otf)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src'],
                        },
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8062,
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-url-loader',
                            options: {
                                limit: 10000,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }], {
                copyUnmodified: false,
            }),
        ],
    };
};
