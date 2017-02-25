import webpack from 'webpack'
import path from 'path'

export default {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, 'public/build'),
		filename: 'index.bundle.js',
	},
	resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        },		
	},
    module: {
        rules: [
            { 
                test: /.js|.jsx$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
		    {
		        test: /\.css$/,
		        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        	},
		    {
		        test: /\.png$/,
		        loader: 'url-loader' 
        	},
        	{
        		test: /\.md$/,
        		loader: 'markdown-with-front-matter-loader'
        	},     	
	        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=build/[hash].[ext]" },
	        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ],
    },
	devServer: {
		host: '0.0.0.0',
		port: 3333,
		contentBase: path.join(__dirname, '/public'),
	    publicPath: "/build/"
	},
	devtool: 'cheap-module-eval-source-map',
}

