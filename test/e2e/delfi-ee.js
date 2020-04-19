const config = require("../../nightwatch.conf.js");

module.exports = {
  "Ekspress test": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 3000) // css
      .useXpath()
      .waitForElementVisible("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a", 3000)
      .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
      .waitForElementVisible("//*[@id='header']/div[1]/ul/li[3]/a", 3000)
      .click("//*[@id='header']/div[1]/ul/li[3]/a")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .waitForElementVisible("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a", 2000)
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a")
      .waitForElementVisible("//*[@id='main']/section/div[1]/div[1]/ul/li[6]/a", 2000)
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]/a")
      .waitForElementVisible("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/div/h1", 2000)
      .click("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/div/h1")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .assert.elementPresent("//a[@class='article__listen']")
      .saveScreenshot(`${config.imgpath(browser)}delfi-ee.png`)
      .end();
  },
};
