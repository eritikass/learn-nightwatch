const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for nightwatchjs": function (browser) {
    browser
      .url("https://nightwatchjs.org/")
      .waitForElementVisible("body", 1000) // css
      .resizeWindow(1200, 800)
      .waitForElementVisible("body", 1000) // css
      .useXpath()
      .click('//div[@id="navbar"]//a[text()="API Reference"]') // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .useXpath()
      .click("//a[@href='/api/expect/']") // xpath ??
      .useCss()
      .waitForElementVisible("body", 500) // css
      .useXpath()
      .click("//a[@href='#expect-elements-count']") // xpath ??
      .useCss()
      .assert.containsText('#expect-elements-count', '.elements().count')
      .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
      .end();
  },
};
