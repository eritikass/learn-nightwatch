const config = require("../../nightwatch.conf.js");

module.exports = {
  "ekspress": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 2000) // css
      .resizeWindow(1200, 800)
      .useXpath()
      .click('//a[@href="areen"]')
      .useCss()
      .waitForElementVisible("body", 2000) // css
      .useXpath()
      .click('//a[@href="/teema/kirjandus"]')
      .useCss()
      .waitForElementVisible("body", 2000) // css
      .click("a.pager__button--next")
      .waitForElementVisible("body", 2000) // css
      .useXpath()
      .click('//a[@href="?page=3"]')
      .useCss()
      .waitForElementVisible("body", 2000) // css
      .useXpath()
      .click('(//div[@class="headline"])[last()]')
      .pause(5000)
      .assert.elementPresent('//a[@href="#"]') // check for kuula icon
      .pause(5000)
      .moveToElement("//div[@class='cxense__title']", 0, 0) // scroll to seotud lood - sellist polnud, läksin "loe veel" lõiguni
      .useCss()
      .waitForElementVisible("body", 2000) // css
      .saveScreenshot(`${config.imgpath(browser)}loe_veel.png`)
      .end();
  },
};