const config = require("../../nightwatch.conf.js");

module.exports = {
  "Felix cat": function(browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .setValue("//input[@name='q']", "cat")
      .keys([browser.Keys.ENTER])
      .getTitle(title => {this.assert.ok(title.includes("Cat"))})
      .saveScreenshot(`${config.imgpath(browser)}cat.png`)
      .assert.containsText("a[href='https://en.wikipedia.org/wiki/Cat']", "Wikipedia")
      .click("a[href='https://en.wikipedia.org/wiki/Cat']")
      .assert.containsText("a[href='https://en.wikipedia.org/wiki/Cat']", "Felis catus")
      .end()
  }
};

/* * Open https://www.google.com/
 * Search "cat"
 * Check title contains "cat"
 * Take screenshot
 * Check that page has wikipedia link
 * Open wikipedia link to article about cat
 * Check that article contains latin name -> "Felis catus" */