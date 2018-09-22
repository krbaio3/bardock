const config = require('./protractor.conf').config;

config.multiCapabilities = [
  {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--no-sandbox', '--disable-gpu']
    }
  },
  {
    browserName: 'firefox',
    firefoxOptions: {
      args: ['-headless']
    },
    'moz:firefoxOptions': {
      args: ['-headless']
    }
  }
];

exports.config = config;
