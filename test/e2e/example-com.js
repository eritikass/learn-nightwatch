const config = require("../../nightwatch.conf.js");

module.exports = {
/*
 * Open http://example.com/
 * test that page contains text "Example Domain"
 * test that page has link "More information..."
 * take screenshot
 * click link "More information..."
 * wait until new page opens
 * test that title is "IANA — IANA-managed Reserved Domains"
 * take screenshot
*/
  "Example Domain -> More information": function (browser) {
    browser
      .useXpath()
      .resizeWindow(1200, 800)
      .url("http://example.com/")
      .waitForElementVisible("html/body", 2000)
      .assert.containsText("html/body", "Example Domain")
      .assert.containsText("//a", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}example1.png`)
      .click("//a[text()='More information...']")
      .waitForElementVisible("html/body", 500)
      .assert.title("IANA — IANA-managed Reserved Domains")
      .saveScreenshot(`${config.imgpath(browser)}example2.png`)
      .end();
  },
};
