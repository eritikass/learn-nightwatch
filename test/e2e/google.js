const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .pause(1000)
      .assert.title('Google')
      .setValue('input[name=q]','Terekest!')
      .pause(1000)
      .click('input[name=btnK]')
      .saveScreenshot(`${config.imgpath(browser)}google.png`)
      .pause(1000)  
      .assert.containsText('body','Terekest')
      .end();
  },
};
