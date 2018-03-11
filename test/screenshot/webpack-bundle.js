const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports.bundle = function(testPath, outputPath) {
  return {
    entry: './test/screenshot/' + testPath,
    output: {
      filename: outputPath + '.js',
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                importer: function(url) {
                  if (url.indexOf('@material') === 0) {
                    let filePath = url.split('@material')[1];
                    filePath = filePath.slice(1);
                    const nodeModulePath = `./packages/mdc-${filePath}`;
                    return {
                      file: require('path').resolve(nodeModulePath),
                    };
                  }
                  return {
                    file: url,
                  };
                },
              },
            },
          ]}),
      }],
    },
    plugins: [
      new ExtractTextPlugin(outputPath + '.css'),
      new OptimizeCssAssetsPlugin(),
    ],
  };
};
