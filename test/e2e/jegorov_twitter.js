const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['twitter'],
  'Login to twitter': function (browser) {
    browser
      .url('https://twitter.com/login')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}twitterlogiminevmis.png`)
      .setValue('.js-username-field', 'JustGetAHouse4H')
      .setValue('.js-password-field', 'JustGetAHouse')
      .click('button[type="submit"]')
      .pause(5000)
      .assert.containsText('a[class="u-textInheritColor js-nav"]', 'Just GetAHouse')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}twitterhomepage.png`)
      .pause(500)
      .end();
  },
};
