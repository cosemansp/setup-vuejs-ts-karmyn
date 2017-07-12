var Logger = require('js-logger');
var merge = require('webpack-merge');
var devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  LOG_LEVEL: JSON.stringify(Logger.OFF),
});
