const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for Telia": function (browser) {
    browser
      .url("https://taltech.ee/")
      .waitForElementVisible("body", 2000)
      .click('a.xtouch-dbl-clk')
      .useCss()
      .waitForElementVisible("body", 500)
      .assert.containsText("body", "Siin on vajaliku infot sisseastujale.")
      .saveScreenshot(`${config.imgpath(browser)}taltech-ee-sisseastujale.png`)
      .end();
  },
};
