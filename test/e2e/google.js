const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for google": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 4000) // css
      .assert.titleContains('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'cat')
      .keys(browser.Keys.ENTER)
      .getTitle(function (title) {
        this.assert.ok(title.includes("cat"));
      });
    browser
      .saveScreenshot(`${config.imgpath(browser)}google-cat.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", 'Wikipedia') // xpath
      .click("//a[@href='https://en.wikipedia.org/wiki/Cat']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText('body', 'Felis catus') // css
      .end();
  },
};
