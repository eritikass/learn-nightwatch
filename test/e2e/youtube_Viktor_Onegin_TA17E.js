const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['youtube '],
  'Open youtube': function (browser) {
    // load google
    browser
      .resizeWindow(1920, 1080)
      .url('https://www.youtube.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .click('a[href="/feed/history"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}youtube.png`)
      .end();
  },
};
