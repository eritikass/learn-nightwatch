const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['Github'],
  'Open and incorrect version of Github.com': function (browser) {
    // load google
    browser
      .url('http://guthib.com/')
      .resizeWindow(1920, 1080)
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}spelleditwrong.png`)
      .url('https://www.youtube.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}youtube.png`)
      .setValue('#search', ['ninja bon bon', browser.Keys.ENTER])
      .pause(1000)
      .click('a[href="/watch?v=aei7C1EcF38"')
      .pause(50000)
      .saveScreenshot(`${config.imgpath(browser)}ninjabonbon.png`)
      .end()
  },
};
