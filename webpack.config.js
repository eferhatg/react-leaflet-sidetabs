/* eslint-disable */
module.exports = {
	entry: './src/index.js',
	output: {
		library: {
			root: 'ReactLeafletSideTabs',
			amd: 'react-leaflet-SideTabs',
			commonjs: 'react-leaflet-SideTabs'
		},
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
	mode: 'production',
	module: {
		rules: [
            {
                test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
					  presets: ["@babel/preset-env"],
					}
				  },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
	}
};