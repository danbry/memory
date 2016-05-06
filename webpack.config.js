const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'bootstrap-loader',
    './src/index.js'
  ],
  output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/build'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
