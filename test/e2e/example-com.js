/* const config = require("../../nightwatch.conf.js");
module.exports = {
  "Example Domain": function(browser) {
    browser
      .url("http://example.com/")
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Example Domain")
      .assert.containsText("a[href='https://www.iana.org/domains/example']", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}example.png`)
      .click("a[href='https://www.iana.org/domains/example']")
      .waitForElementVisible("body")
      .assert.title('IANA — IANA-managed Reserved Domains')
      .saveScreenshot(`${config.imgpath(browser)}IANA.png`)
      .end();
  }
} */
/* * Open http://example.com/
 * test that page contains text "Example Domain"
 * test that page has link "More information..."
 * take screenshot
 * click link "More information..."
 * wait until new page opens
 * test that title is "IANA — IANA-managed Reserved Domains"
 * take screenshot */