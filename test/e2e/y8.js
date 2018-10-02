const config = require('../../nightwatch.conf.js');

//Patrick Teivas TA-17E

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['y8'],
  'y8': function (browser) {
    // load mangukoobas
    browser
      .url('https://y8.com')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}y8-1.png`)
      .pause(1000)
      .click('a[href="/games/slope"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}y8-2.png`)
      .pause(1000)
      .end();
  },
};
