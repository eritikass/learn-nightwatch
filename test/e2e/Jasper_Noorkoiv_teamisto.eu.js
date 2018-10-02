const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['teamisto'],
  'Open teamisto': function (browser) {
    // load teamisto.eu
    browser
      .url('https://teamisto.eu')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}teamisto1.png`);
  },
};