const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for google.com": function (browser) {
    browser
      .url("https://google.com")
      .waitForElementVisible("body", 2000)
      .clearValue('input[type="text"]')
      .setValue('input[type="text"]', 'cat')
      .keys(browser.Keys.ENTER)
      .waitForElementVisible("body", 2000)
      .expect.title().to.contain('cat');
    browser
      .saveScreenshot(`${config.imgpath(browser)}cat-google.png`)
      .useXpath()
      .verify.elementPresent("//a[contains(@href, 'wikipedia')]")
      .click("//a[contains(@href, 'wikipedia')]")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Felis catus")
      .end();
  },
};
