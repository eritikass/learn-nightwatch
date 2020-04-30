const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for ekspress": function (browser) {
    browser
      .setWindowSize(1200, 800)
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//a[@href='areen']")
      .useCss()
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//a[@href='/teema/kirjandus']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .click("a.pager__button--next")
      .pause(3000)
      .click("a.pager__button--next")
      .waitForElementVisible("body", 2000)
      .assert.urlEquals("https://ekspress.delfi.ee/teema/kirjandus?page=3")
      .pause(3000)
      .useXpath()
      .click('(//div[@class="headline"])[last()]')
      .useCss()
      .waitForElementVisible("body", 5000)
      .pause(3000)
      .useXpath()
      .waitForElementVisible("//div[@class='col-sm-24 col-md-8 text-right']//a[text()='Kuula']", 5000, "Article has 'kuula' button")
      .useCss()
      .saveScreenshot(`${config.imgpath(browser)}ekspress.png`);
  },
};
