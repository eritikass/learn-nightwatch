const config = require("../../nightwatch.conf.js");

module.exports = {
/*
 * Open https://www.google.com/
 * Search "cat"
 * Check title contains "cat"
 * Take screenshot
 * Check that page has wikipedia link
 * Open wikipedia link to article about cat
 * Check that article contains latin name -> "Felis catus"
*/
  'Google -> "cat" -> Wikipedia -> "Felis catus"': function (browser) {
    browser
      .useXpath()
      .resizeWindow(1200, 800)
      .url("https://www.google.com/")
      .waitForElementVisible("html/body", 2000)
      .keys("cat")
      .keys(browser.Keys.ENTER)
      .waitForElementVisible("html/body", 500)
      .expect.title().to.contain("cat");

    browser
      .saveScreenshot(`${config.imgpath(browser)}google.png`)
      .expect.element("//a[contains(@href, 'en.wikipedia.org')]/h3").to.be.present;

    browser
      .click("//a[contains(@href, 'en.wikipedia.org')]/h3")
      .waitForElementVisible("html/body", 500)
      .assert.containsText("html/body", "Felis catus")
      .end();
  },
};
