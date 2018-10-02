const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open google': function (browser) {
    // load lashart
    browser
      .url('http://www.lashartstudio.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}lashart.jpg`)
      .pause(1000)
      .click('a[href="/meist"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}meist.jpg`);
  },
};
