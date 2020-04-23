const config = require("../../nightwatch.conf.js");

module.exports = {
/*
 * Open "https://ekspress.delfi.ee/"
 * open "Areen" -> "Kirjandus"
 * move to 3'rd page
 * open last article from listing
 * Check that article has "kuula" button
 * Take screenshot
*/
  'Ekspress -> Areen -> Kirjandus -> 3rd page -> last article -> "kuula" button': function (browser) {
    browser
      .useXpath()
      .resizeWindow(1200, 800)
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("html/body", 2000)
      .click("//a[text()='Areen']")
      .waitForElementVisible("//a[text()='Kirjandus']", 500)
      .click("//a[text()='Kirjandus']")
      .waitForElementVisible("html/body", 500)
      .click("//a[text()='»']")
      .assert.urlEquals('https://ekspress.delfi.ee/teema/kirjandus?page=3')
      .waitForElementVisible("(//span[text()='Loe edasi'])[last()]", 500)
      .click("(//span[text()='Loe edasi'])[last()]")
      .waitForElementVisible("html/body", 500)
      .assert.visible('//a[text()="Kuula"]')
      .pause(2000) // Without pause button moves below screen because ad loads slowly
      .moveToElement('//a[text()="Kuula"]', 0, 0)
      .saveScreenshot(`${config.imgpath(browser)}ekspress.png`)
      .end();
  },
};
