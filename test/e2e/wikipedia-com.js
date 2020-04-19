const config = require("../../nightwatch.conf.js");

module.exports = {
  "google.com -> wikipedia.com": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000) // css
      .setValue("input[type='text']", ["cat", browser.Keys.ENTER])
      .waitForElementVisible("body", 2000)
      .assert.titleContains("cat")
      .saveScreenshot(`${config.imgpath(browser)}wikipedia-com.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", "Cat - Wikipedia")
      .click("//a[@href='https://en.wikipedia.org/wiki/Cat']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Felis catus")
      .end();
  },
};
