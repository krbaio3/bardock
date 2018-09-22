// protractor.conf.ts

import * as path from 'path';

import { Config } from 'protractor';

export const config: Config = {
  allScriptsTimeout: 99999,

  // The address of a running selenium server.
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  // The location of the selenium standalone server .jar file, relative
  // to the location of this config. If no other method of starting selenium
  // is found, this will default to
  // node_modules/protractor/selenium/selenium-server...
  // seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  // seleniumPort: 4444,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--safe-mode']
      }
    },
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['show-fps-counter=true']
      }
    }
  ],

  baseUrl: 'http://localhost:9876/',
  // set to 'custom' instead of cucumber.
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Spec patterns are relative to the current working directly when protractor is called.
  specs: ['../features/*.feature'],

  // Options to be passed to Cucumber.
  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    // Require files before executing the features.
    require: './cucumberJS/steps/*.step.js',
    // Only execute the features or scenarios with tags matching @dev.
    // This may be an array of strings to specify multiple tags to include.
    // tags: '@dev',
    // How to format features (progress, summary, pretty, json)
    // format json:xxx => output file in JSON
    // format: 'json:./cucumber/result/cucumber.json'
    format: 'json:cucumberTestReport/results.json',
    strict: true,
    tags:
      '@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario'
  },

  directConnect: true,

  // Here the magic happens
  plugins: [
    {
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options: {
        // read the options part for more options
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
      }
    }
  ]
};
