const karmaConfig = require('./scripts/karma/config');

// TODO test everything but chrome
const CBT_LAUNCHERS = {
  'chrome-latest': {
    base: 'CrossBrowserTesting',
    browserName: 'chrome',
    browser_api_name: 'chrome-latest',
    os_api_name: 'Win7x64',
    screen_resolution: '1366x768'
  },
}

module.exports = function(config) {
  karmaConfig.browsers = Object.keys(CBT_LAUNCHERS);
  karmaConfig.customLaunchers = CBT_LAUNCHERS;

  config.set(karmaConfig);
};
