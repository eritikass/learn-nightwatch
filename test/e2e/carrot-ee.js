const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for carrot.ee": function (browser) {
    browser
      .url("https://carrot.ee/")
      .waitForElementVisible("body", 6000)
      .useXpath()
      .click("//a[@href='https://carrot.ee/tooted/']")
      .assert.visible("//a[@href='https://carrot.ee/product-category/otse-ahjust/']")
      .click("//a[@href='https://carrot.ee/product-category/otse-ahjust/']")
      .useCss()
      .waitForElementVisible("body", 6000)
      .useXpath()
      .assert.visible("//a[text()='Pizza köögiviljadega (taimne)  Ø 28cm (keskmiselt 400g)']")
      .saveScreenshot(`${config.imgpath(browser)}porgand.png`)
      .end();
  },
};
