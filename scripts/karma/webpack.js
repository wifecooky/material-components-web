const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
    ],
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: {esModules: true},
        },
        include: path.resolve('packages/'),
        exclude: [
          /node_modules/,
          /adapter.js/,
        ],
        enforce: 'post',
      },
    ],
  },
};
