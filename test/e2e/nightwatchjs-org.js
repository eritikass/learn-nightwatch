const config = require("../../nightwatch.conf.js");

module.exports = {
  "test for nightwatchjs": function (browser) {
    browser
      .url("https://nightwatchjs.org/")
      .waitForElementVisible("body", 1000) // css
      .useXpath()
      .click("//a[@href='/api']")
      .useCss()
      .waitForElementVisible("body", 1000)
      .useXpath()
      .waitForElementVisible("//a[@href='/api/expect/']")
      .click("//a[@href='/api/expect/']")
      .click("//a[@href='#expect-elements-count']")
      .assert.containsText("//a[@href='#expect-elements-count']", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-org.png`)
      .end();
  },
};
