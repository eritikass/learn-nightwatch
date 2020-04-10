const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for rate": function (browser) {
    browser
      .url("https://www.rate.ee/login")
      .waitForElementVisible("body", 2000)
      .click('a.icn-messages')
      .useCss()
      .waitForElementVisible("body", 2000)
      .saveScreenshot(`${config.imgpath(browser)}rate-ee-kirjakast.png`)
      .end();
  },
};
