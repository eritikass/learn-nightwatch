const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for Telia": function (browser) {
    browser
      .url("https://taltech.ee/sisseastujale/")
      .waitForElementVisible("body", 2000)
      .click('a.arrow-link')
      .useCss()
      .waitForElementVisible("body", 500)
      .saveScreenshot(`${config.imgpath(browser)}taltech-ee-sisseastujale.png`)
      .end();
  },
};
