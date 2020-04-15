const config = require("../../nightwatch.conf.js");

module.exports = {
  "google.com -> wikipedia.com": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 1000) // css
      .waitForElementVisible("input[type='text']", 1000)
      .setValue("input[type='text']", "cat")
      .click("input[type='submit']")
      .waitForElementVisible("body", 1000)
      .assert.titleContains("cat")
      .saveScreenshot(`${config.imgpath(browser)}wikipedia-com.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", "Cat - Wikipedia")
      .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
      .click("//a[@href='https://en.wikipedia.org/wiki/Cat']")
      .useCss()
      .waitForElementVisible("body", 1000)
      .assert.containsText("body", "Felis catus")
      .end();
  },
};
