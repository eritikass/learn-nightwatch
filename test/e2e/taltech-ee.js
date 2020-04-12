const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for Taltech": function (browser) {
    browser
      .url("https://taltech.ee/")
      .waitForElementVisible("body", 2000)
      .click('a.xtouch-dbl-clk')
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Sisseastuja")
      .saveScreenshot(`${config.imgpath(browser)}taltech-ee-sisseastujale.png`)
      .end();
  },
};
