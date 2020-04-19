const config = require("../../nightwatch.conf.js");

module.exports = {
  "NightwatchJS test": function (browser) {
    browser
      .url("https://nightwatchjs.org")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .waitForElementVisible("//*[@id='navbar']/ul/li[4]/a", 2000)
      .click("//*[@id='navbar']/ul/li[4]/a")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .waitForElementVisible("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a", 2000)
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a")
      .pause(1000)
      .click("//*[@id='expect-elements-count']")
      .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}countTitle.png`)
      .end();
  },
};
