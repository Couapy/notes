const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "static/frontend"),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".js", ".jsx"],
				},
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	devServer: {
		open: "Firefox",
	},
};
