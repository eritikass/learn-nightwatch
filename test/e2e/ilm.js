const config = require("../../nightwatch.conf.js");

module.exports = {
  Ilm(browser) {
    browser
      .url("https:/ilm.ee/")
      .waitForElementVisible("body", 5000) // css
      .resizeWindow(1200, 800)
      .useXpath()
      .click("//a[@class='nav-right']")
      .useCss()
      .waitForElementVisible("body", 5000) // css
      .useXpath()
      .click("//h2[@id='linnanimi']//a[contains(text(),'Tallinn')]")
      .useCss()
      .waitForElementVisible("body", 5000) // css
      .useXpath()
      .moveToElement("//img[@class='img-responsive']", 0, 0)
      .useCss()
      .waitForElementVisible("body", 5000) // css
      .saveScreenshot(`${config.imgpath(browser)}tallinn.png`)
      .end();
  },
};
