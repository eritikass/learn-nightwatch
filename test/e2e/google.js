const config = require('../../nightwatch.conf.js');

module.exports = {
  'Google cat': function Cat(browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body', 2000) // css
      .clearValue('input[type=text]')
      .setValue('input[type=text]', ['cat', browser.Keys.ENTER])
      .waitForElementVisible('body', 2000) // css
      .assert.titleContains('cat')
      .saveScreenshot(`${config.imgpath(browser)}google-cat.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", 'Cat - Wikipedia') // xpath
      .useCss()
      .assert.containsText('body', 'Felis catus') // css
      .end();
  },
};