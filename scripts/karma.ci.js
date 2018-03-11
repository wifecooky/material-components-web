const karmaConfig = require('./scripts/karma/config');

module.exports = function(config) {
  karmaConfig.browsers = ['chrome-latest'];
  karmaConfig.customLaunchers = {
    'chrome-latest': {
      base: 'CrossBrowserTesting',
      browserName: 'chrome',
      browser_api_name: 'chrome-latest',
      os_api_name: 'Win7x64',
      screen_resolution: '1366x768',
    },
  };

  config.set(karmaConfig);
};
