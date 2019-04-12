const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['Jalgpall'],
  'Jalgpall': function (browser) {
    browser
      .url('http://jalgpall.ee/')
      .waitForElementVisible('body')
      .pause(2000)

      .saveScreenshot(`${config.imgpath(browser)}jalgpall.png`)
      .pause(2000)
      .click('a.button.search-toggle')

      .clearValue('input[name=keyword]')
      .pause(2000)
      .setValue('input[name=keyword]', 'Anna Andreas') 
      .pause(2000)
      .keys(browser.Keys.ENTER)
      .pause(2000)
      .click('a.title')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}jalgpall2.png`)
      .assert.containsText('body','')
      .end();
  },
};
