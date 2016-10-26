var webpack = require("webpack");
var version = require("./package.json").version;
var banner = "/**\n" + " * vue-touch-keyboard v" + version + "\n" + " * https://github.com/icebob/vue-touch-keyboard\n" + " * Released under the MIT License.\n" + " */\n";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");

var loaders = [
	{
		"test": /\.js?$/,
		"exclude": /node_modules/,
		"loader": "babel"
	},
	{
		"test": /\.vue$/,
		"loader": "vue"
	},
	{ 
		test: /\.svg$/, 
		loader: "url" 
	}	
];

module.exports = [
	{
		entry: "./src/index",
		output: {
			path: "./dist",
			filename: "vue-touch-keyboard.js",
			library: "VueTouchKeyboard",
			libraryTarget: "umd"
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env" : {
					NODE_ENV : JSON.stringify("production")
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.optimize.DedupePlugin(),
			new webpack.BannerPlugin(banner, {
				raw: true
			}),
			new ExtractTextPlugin("vue-touch-keyboard.css", { allChunks: true }),
			new StatsPlugin("../stats.json", {
				chunkModules: true
				//exclude: [/node_modules[\\\/]react/]
			})
		],

		module: {
			loaders
		},

		vue: {
			loaders: {
				css: ExtractTextPlugin.extract("css"),
				postcss: ExtractTextPlugin.extract("css"),
				sass: ExtractTextPlugin.extract("css!sass"),
			}
		},

		resolve: {
			packageAlias: "browser"
		}
	}

];