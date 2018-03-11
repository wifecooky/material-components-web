const coverage = require('./coverage');
const tdd = require('./tdd');
const webpack = require('./webpack');

module.exports = {
  basePath: '',
  frameworks: ['mocha'],
  files: [
    'test/unit/index.js',
  ],
  preprocessors: {
    'test/unit/index.js': ['webpack', 'sourcemap'],
  },
  reporters: ['dots', 'coverage'],
  port: 9876,
  colors: true,
  browserDisconnectTimeout: 40000,
  browserNoActivityTimeout: 120000,
  captureTimeout: 240000,

  coverageReporter: coverage,
  client: tdd,
  webpack: webpack,
};
