const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open mario': function (browser) {
    // Open mario
    browser
    .resizeWindow(1920, 1080)
    .url('https://supermarioemulator.com/mario.php')
      .pause(1000)
      .waitForElementVisible('body')
      //for (int i = 0; i < 2000; i++) {

      //}
      //while(true) {
      //  browser.sendKeys('body', 'KEY_RIGHT')
      //}
      var i = 0;
      do {
          browser.sendKeys('canvas', 'KEY_RIGHT')
          i++;
      }
      while(i < 2000)
      browser.pause(2000)
      .end()
  },
};