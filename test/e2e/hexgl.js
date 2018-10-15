//http://hexgl.bkcore.com/play/
const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open mario': function (browser) {
    // Open mario
    browser
    .resizeWindow(1920, 1080)
    .url('http://hexgl.bkcore.com/play/')
      .pause(1000)
      .waitForElementVisible('body')
      .click('#start')
      .pause(2000)
      .click('#step-2')
      .pause(5000)
      for (var i = 0; i < 20000; i++) {
        browser.sendKeys('body', 'KEY_UP')
      }
      browser.end()
    //  var i = 0;
    //  do {
    //    browser.sendKeys('body', 'KEY_RIGHT')
    //    i++;
    //}
    //while(i < 2000)
    //  browser.end()
  },
};