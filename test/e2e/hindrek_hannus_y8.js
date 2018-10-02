const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['y8'],
  'Open y8': function (browser) {
    // load google
    browser
      .url('https://www.y8.com')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}y8-1.png`)
      .click('a[href="/games/tunnel_rush"]')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}y8-2.png`)
      .pause(1000)
      .end();
  },
};
