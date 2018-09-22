const config = require('./cucumber.conf').config;

config.multiCapabilities = [
  {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--no-sandbox', '--disable-gpu']
    }
  },
  {
    browserName: 'firefox',

    'moz:firefoxOptions': {
      args: ['--headless']
    }
  }
];

exports.config = config;
