const conf = require('../../nightwatch.conf.js');

module.exports = {
  "IANA Domains": function (browser) {
    browser
      .url("https://www.example.com")
      .waitForElementVisible("body", 4000)
      .assert.containsText('body', "Example Domain")
      .useXpath()
      .assert.containsText("/html/body/div/p[2]/a", "More information...") // xpath
      .useCss()
      .saveScreenshot(`${conf.imgpath(browser)}example-com-info.png`)
      .click('a')
      .pause(4000)
      .assert.title("IANA — IANA-managed Reserved Domains")
      .saveScreenshot(`${conf.imgpath(browser)}example-com-iana.png`)
      .end();
  },
};
