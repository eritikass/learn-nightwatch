const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for example": function (browser) {
    browser
      .url("http://example.com/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText('body', 'Example Domain') // css
      .useXpath()
      .assert.containsText("//a[@href='https://www.iana.org/domains/example']", 'More information...') // xpath
      .saveScreenshot(`${config.imgpath(browser)}example-more-information.png`)
      .click("//a[@href='https://www.iana.org/domains/example']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.title('IANA — IANA-managed Reserved Domains') // css
      .saveScreenshot(`${config.imgpath(browser)}example-IANA.png`)
      .end();
  },
};
