const config = require('../../nightwatch.conf.js');

module.exports = { 
  '@tags': ['y8'],
  'Open y8': function (browser) {
    browser
      .url('https://www.y8.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}y1.png`)
      .click('a[href="/games/slope"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}y2.png`)
      .pause(1000)
      .end();

  },
};