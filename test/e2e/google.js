var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Google test': function(browser) {
    browser
      .url('https://google.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(config.imgpath(browser)+ 'google1.png')
    browser
      .pause(2000)
      .setValue('#lst-ib', ['cat', browser.Keys.ENTER])
      .saveScreenshot(config.imgpath(browser)+ 'google100.png') 
      .pause(2500)
      .end();
      

  }
};
