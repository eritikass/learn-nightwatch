const config = require("../../nightwatch.conf.js");

module.exports = {
  google(browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000) // css
      .setValue('input[type=text]', 'cat')
      .waitForElementVisible('body', 2000)
      .click('input[type=submit]')
      .waitForElementVisible('body', 2000)
      .assert.titleContains('cat')
      .saveScreenshot(`${config.imgpath(browser)}cat.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", 'Cat - Wikipedia') // xpath
      .click("//a[@href='https://en.wikipedia.org/wiki/Cat']") // xpath
      .useCss()
      .waitForElementVisible('body', 2000) // css
      .assert.containsText('body', 'Felis catus') // css
      .end();
  },
};
