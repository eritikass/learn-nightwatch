const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open google': function (browser) {
    // load magukoobas
    browser
      .url('https://www.facebook.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}google1.png`);

    // search kassid
    browser
      .setValue('#email', ['username', browser.Keys.ENTER])
      .saveScreenshot(`${config.imgpath(browser)}google2.png`)
      .pause(10000)
      .saveScreenshot(`${config.imgpath(browser)}google3.png`)
      .assert.containsText('body', 'Facebook')
      .end();
  },
};
