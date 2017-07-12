// This is the webpack config used for unit tests.
var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
var rules = utils.styleLoaders();
rules.push({
  test: /\.ts$/,
  exclude: /node_modules|vue\/src/,
  loader: 'ts-loader',
  options: {
    appendTsSuffixTo: [ /\.vue$/ ],
    configFileName: resolve('src/tsconfig.spec.json'),
  },
});

var webpackConfig = merge.smart(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules,
  },
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env'),
    }),
  ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
