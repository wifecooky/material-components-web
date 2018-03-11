const karmaConfig = require('./scripts/karma/config');

module.exports = function(config) {
  karmaConfig.browsers = ['chrome-latest'];
  karmaConfig.customLaunchers = {
    'chrome-latest': {
      base: 'CrossBrowserTesting',
      browserName: 'Chrome',
      browser_api_name: 'Chrome62x64',
      os_api_name: 'Mac10.12',
    },
  };

  config.set(karmaConfig);
};
