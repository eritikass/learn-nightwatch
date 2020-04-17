const config = require("../../nightwatch.conf.js");

module.exports = {
  "Example": function (browser) {
    browser
      .url("http://example.com/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Example Domain") // css
      .useXpath()
      .assert.containsText("//a[@href='https://www.iana.org/domains/example']", "More information...") // xpath
      .saveScreenshot(`${config.imgpath(browser)}MoreInformation....png`)
      .click("//a[@href='https://www.iana.org/domains/example']") // xpath
      .useCss()
      .waitForElementVisible("body", 2000) // css
      .assert.title("IANA — IANA-managed Reserved Domains")
      .saveScreenshot(`${config.imgpath(browser)}IANA.png`)
      .end();
  },
};

//  * Open http://example.com/
//  * test that page contains text "Example Domain"
//  * test that page has link "More information..."
//  * take screenshot
//  * click link "More information..."
//  * wait until new page opens
//  * test that title is "IANA — IANA-managed Reserved Domains"   .assert.title('IANA — IANA-managed Reserved Domains')
//  * take screenshot