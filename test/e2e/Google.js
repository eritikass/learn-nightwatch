const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}google.png`)
      .assert.title('Google')
      .clearValue('input[name=q]')
      .pause(2000)
      .setValue('input[name=q]', 'Gitlab') 
      .pause(2000)
      .click('input[name=btnK]') 
      .saveScreenshot(`${config.imgpath(browser)}google2.png`)
      .assert.containsText('body','')
      .end();
  },
};
