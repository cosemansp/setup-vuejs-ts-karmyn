var merge = require('webpack-merge');
var prodEnv = require('./prod.env');
var Logger = require('js-logger');

module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  LOG_LEVEL: JSON.stringify(Logger.DEBUG),
});
