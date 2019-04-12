const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Google cat search': function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .pause(5000)
      .assert.title('Google')
      .saveScreenshot(`${config.imgpath(browser)}google1.png`)
      .pause(1000)
      .setValue('input[name=q]', 'cat')
      .pause(2000)
      .click('input[name=btnK]')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}google2.png`)
      .assert.containsText('body', 'cat')
      .end();
    },
};
