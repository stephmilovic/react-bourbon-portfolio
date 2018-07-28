const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const neat = require('bourbon-neat').includePaths;
const reset = require('node-reset-scss').includePath;

module.exports = {
    mode: 'production',
    output: {
        filename: `${commonPaths.jsFolder}/[name].[hash].js`,
        path: commonPaths.outputPath,
        chunkFilename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]',
                        },
                    },
                    'sass-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [reset, bourbon, neat, commonPaths.sass],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([commonPaths.outputPath.split('/').pop()], {
            root: commonPaths.root,
        }),
        new MiniCssExtractPlugin({
            filename: `${commonPaths.cssFolder}/[name].css`,
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'source-map',
};
