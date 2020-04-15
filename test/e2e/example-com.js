const config = require("../../nightwatch.conf.js");

module.exports = {
  "example.com -> IANA-managed Reserved Domains": function (browser) {
    browser
      .url("http://example.com/")
      .waitForElementVisible("body", 1000) // css
      .assert.containsText("body", "Example Domain")
      .useXpath()
      .assert.containsText("//a[@href='https://www.iana.org/domains/example']", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
      .click("//a[@href='https://www.iana.org/domains/example']")
      .useCss()
      .waitForElementVisible("body", 500)
      .assert.title("IANA — IANA-managed Reserved Domains")
      .saveScreenshot(`${config.imgpath(browser)}example-extra-com.png`)
      .end();
  },
};
