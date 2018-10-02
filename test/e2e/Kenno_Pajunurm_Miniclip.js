const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['Miniclip'],
  'Open Miniclip': function (browser) {
    // load google
    browser
      .url('https://www.miniclip.com/games/en/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}miniclip1.png`)
      .click('a[href="https://app.adjust.com/kao5f6"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}miniclip2.png`)
      .pause(1000)
      .end();
  },
};
