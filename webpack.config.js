const webpack = require('webpack')
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const fm = require('front-matter')

const isProduction = process.argv.indexOf('-p') !== -1;

module.exports = {
    context: __dirname,    
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: (isProduction ? 'assets/main.[chunkhash].js' : 'assets/main.js'),
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        },      
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /preact-compat|\.jsx$/,
                use: "babel-loader",
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&publicPath=assets/&outputPath=assets/'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&outputPath=assets/" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10000&outputPath=assets/" },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?modules&importLoaders=1&localIdentName=[local]', 'postcss-loader'],
                }),
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3333,
        inline: false
    },
    devtool: (isProduction ? false : "cheap-module-eval-source-map"),
    plugins: [
        new ExtractTextPlugin(isProduction ? 'assets/main.[chunkhash].css' : 'assets/main.css'),

        new StaticSiteGeneratorPlugin({
            paths: ['/'],
            locals: { 'isProduction': isProduction },
            globals: { window: {} }
        }),
    ].concat(isProduction ? [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.bundle.*\.css$/,
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              screw_ie8: true,
              conditionals: true,
              unused: true,
              comparisons: true,
              sequences: true,
              dead_code: true,
              evaluate: true,
              if_return: true,
              join_vars: true
            },
        })
    ] : [])
}