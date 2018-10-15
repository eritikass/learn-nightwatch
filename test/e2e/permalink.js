const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open lastekas': function (browser) {
    // load lastekas
    browser
      .resizeWindow(1920, 1080)
      .url('https://github.com/eritikass/tpt-vue-test-1')
      .pause(100)
      .click('a[href="/eritikass/tpt-vue-test-1/blob/master/babel.config.js"]')
      .pause(1000)
      .keys('y')
      .pause(1000)
      .click('#L3')
      .pause(1000)
      .execute("alert(window.location.href)")
      .pause(1000)
      .end();
  },
};