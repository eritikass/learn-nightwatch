const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open lastekas': function (browser) {
    // load lastekas
    browser
      .url('http://lastekas.tv3.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .setValue('#find', ['juss 33', browser.Keys.ENTER])
      .pause(2000)
      .click('a[href="?go=web&t=1&id=252"]')
      .pause(1000)
      .assert.containsText('body', 'jaanipäev')
      .saveScreenshot(`${config.imgpath(browser)}juku.png`)
      .pause(9000)
      .end();
  },
};