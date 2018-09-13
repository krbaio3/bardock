// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const HTMLReport = require('protractor-html-reporter-2');
// const { JUnitXmlReporter } = require('jasmine-reporters');
const jasmineReporters = require('jasmine-reporters');

const rimraf = require('rimraf');

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
      })
    );
    // jasmine.getEnv().addReporter(
    //   new jasmineReporters.JUnitXmlReporter({
    //     consolidateAll: true,
    //     savePath: './',
    //     filePrefix: 'reportes'
    //   })
    // );
  },
  onComplete() {
    let browserName, browserVersion;
    const capsPromise = browser.getCapabilities();

    capsPromise.then(caps => {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');
      let testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './protractorReport',
        outputFilename: 'index',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      // new HTMLReport().from(root.report, testConfig);
    });
    //rimraf(root.report, ()=>{});
  }
  // end custom config
};
