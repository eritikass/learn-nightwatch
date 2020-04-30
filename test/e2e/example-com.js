const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for example.com": function (browser) {
    browser
      .url("http://example.com")
      .waitForElementVisible("body", 2000)
      .assert.containsText("h1", "Example Domain")
      .assert.containsText("a", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
      .useXpath()
      .click("//a[@href='https://www.iana.org/domains/example']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.title("IANA — IANA-managed Reserved Domains")
      .saveScreenshot(`${config.imgpath(browser)}example-com-2.png`)
      .end();
  },
};
