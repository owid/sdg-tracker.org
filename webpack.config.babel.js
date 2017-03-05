import webpack from 'webpack'
import path from 'path'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import fs from 'fs'
import fm from 'front-matter'

const isProduction = process.argv.indexOf('-p') !== -1;
const postSlugs = fs.readdirSync(path.join(__dirname, 'posts')).filter(file => !file.match(/.jsx$/))

const makeConfig = function(isUMD) {
    return {
        context: __dirname,    
        entry: path.join(__dirname, 'src/index.jsx'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: isUMD ? 
                (isProduction ? 'mispy.umd.[chunkhash].js' : 'mispy.umd.js') : 
                (isProduction ? 'mispy.[chunkhash].js' : 'mispy.js'),
            libraryTarget: isUMD ? 'umd' : 'var'
        },
        resolve: {
            extensions: [".js", ".jsx", ".css"],
            alias: {
                'react': 'preact-compat',
                'react-dom': 'preact-compat'
            },      
        },
        module: {
            rules: [
                {
                    test: /preact-compat|\.jsx$/,
                    use: "babel-loader",
                },
                {
                    test: /\.png$/,
                    loader: 'url-loader?limit=10000&publicPath=/'
                },
                {
                    test: /\.md$/,
                    loader: ['json-loader', 'markdown-it-front-matter-loader'],
                },        
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&publicPath=/" },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10000&publicPath=/" },
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
            new webpack.LoaderOptionsPlugin({
                options: {
                    'markdown-it-front-matter': {
                        html: true
                    }
                }
            }),

            new ExtractTextPlugin(isUMD ? 
                (isProduction ? 'mispy.umd.[chunkhash].css' : 'mispy.umd.css') : 
                (isProduction ? 'mispy.[chunkhash].css' : 'mispy.css')),
        ].concat(isUMD ? [
            new StaticSiteGeneratorPlugin({
                paths: ['/'].concat(postSlugs.map(slug => '/'+slug)),
                locals: { 'fs': fs, 'isProduction': isProduction },
                globals: { window: {} }
            }),

            // Copy the post assets (images and such)
            new CopyWebpackPlugin([
                { context: 'posts', from: '**/*' }
            ], { ignore: ['index.jsx'] })
        ] : [
            new ManifestPlugin()
        ]).concat(isProduction ? [
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
}

export default [makeConfig(false), makeConfig(true)]