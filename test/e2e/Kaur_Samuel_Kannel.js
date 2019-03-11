const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['kertmoorbach'],
  'Open kertmoorbach': function (browser) {
    // load google
    browser
      .resizeWindow(1920, 1080)
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .end();

      

  },
};