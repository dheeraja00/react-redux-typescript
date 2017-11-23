/*
    Webpack configuration, to transpile .ts files & bundle everything together
    Webpack version: 3.5.6
*/
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
    // Entry file for the app
    // App.tsx is the main app entry file
    // Vendor.tsx is for other libs to get imported, like materialized is imported in this project
    entry: {
        app: './src/App.tsx',
        vendor: './src/Vendor.tsx'
    },
    // Store bundled file to dist folder, with there specific name
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    // Resolvable extensions.
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        // Different loaders to resolve typescript, scss, css or font files
        rules: [
            {
                test: /\.tsx$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader']
                })
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{ loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./dist/[hash].[ext]" }]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{ loader: "file-loader" }]
            }
        ]
    },
    // Dev config
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true,
        historyApiFallback: true
    },
    // Different required plugins
    plugins: [
        // This will create html template by taking the format from src/index.html
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // Added jquery plugin directly here
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        // Extract css file which can be then linked to index.html
        new ExtractTextPlugin('style.css')
    ]
}