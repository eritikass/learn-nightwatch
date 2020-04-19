const config = require("../../nightwatch.conf.js");

module.exports = {
  "Ekspress test": function (browser) {
    browser
      .useCss()
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 10000) // css
      .useXpath()
      .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
      .click("//*[@id='header']/div[1]/ul/li[3]/a")
      .useCss()
      .waitForElementVisible("body", 10000)
      .useXpath()
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a")
      .pause(2000)
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]/a")
      .useCss()
      .waitForElementVisible("body", 10000)
      .useXpath()
      .click("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/div/h1")
      .useCss()
      .waitForElementVisible("body", 10000)
      .useXpath()
      .assert.elementPresent("//a[@class='article__listen']")
      .saveScreenshot(`${config.imgpath(browser)}delfi-ee.png`)
      .end();
  },
};
