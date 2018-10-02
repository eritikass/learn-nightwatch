const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open google': function (browser) {
    // load google
    browser
      .url('https://www.beautybay.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}beautybay.png`)
      .click('[class="headerLabel"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}beautybay.png`);
  },
};
