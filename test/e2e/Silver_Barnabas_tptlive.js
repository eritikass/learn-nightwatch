const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['tptlive'],
  'Open tptlive': function (browser) {
    // load 
    browser
      .url('https://www.tptlive.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}tpt.png`)
      .click('a[href="opilasele/"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}tpt1.png`)
      .pause(1000)
      .end();


  },
};
