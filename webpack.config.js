const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "dev"
});
module.exports = {
  entry: ['react-hot-loader/patch',
          'webpack-hot-middleware/client',
          './app/app.js'
  ],
  output: {
    path: __dirname + '/static',
    filename: '[name].js',
    publicPath: 'http://localhost:3000/'
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './app/index.tmpl'),
        inject: true,
        hash: false,
        filename: 'index.html',
        minify: false,
        favicon: false,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: 'css-loader',
        use: ExtractTextPlugin.extract({
          use:'css-loader'
        })
      },
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /(node_modules|quagga\.js)/
      },
    ]
  }
}
