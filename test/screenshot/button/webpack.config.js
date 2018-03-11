const {bundle} = require('../webpack-bundle');

module.exports = [
  bundle('button/index.js', 'button/bundle'),
];
