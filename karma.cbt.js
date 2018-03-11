const karmaConfig = require('./scripts/karma/config');

const CBT_LAUNCHERS = {
  'firefox': {
    base: 'CrossBrowserTesting',
    browserName: 'Firefox 47',
    browser_api_name: 'FF47',
    os_api_name: 'Mac10.12',
  },
  'safari': {
    base: 'CrossBrowserTesting',
    browserName: 'Safari 10',
    browser_api_name: 'Safari10',
    os_api_name: 'Mac10.12',
  },
  'edge': {
    base: 'CrossBrowserTesting',
    browserName: 'Microsoft Edge 16',
    browser_api_name: 'Edge16',
    os_api_name: 'Win10',
  },
}

module.exports = function(config) {
  karmaConfig.browsers = Object.keys(CBT_LAUNCHERS);
  karmaConfig.customLaunchers = CBT_LAUNCHERS;

  config.set(karmaConfig);
};
