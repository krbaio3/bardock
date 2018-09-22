import { config } from './cucumber.conf';
import { Config } from 'protractor';


export default config.multiCapabilities = [
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
