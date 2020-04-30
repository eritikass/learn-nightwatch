// const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for rate.ee": function (browser) {
    browser
      .url("https://nightwatchjs.org/")
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//div[@id='navbar']//a[text()='API Reference']")
      .useCss()
      .waitForElementVisible("body", 1000)
      .end();
  },
};
