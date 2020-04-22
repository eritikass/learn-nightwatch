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
      .click('//*[@id="header"]/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a[text()="Areen"]')
      .waitForElementVisible('//*[@id="header"]/div[1]/ul/li[3]/a[text()="Kirjandus"]', 2000)
      .click('//*[@id="header"]/div[1]/ul/li[3]/a[text()="Kirjandus"]')
      .waitForElementVisible("html/body", 2000)
      .click('//*[@id="main"]/section/div[1]/div[1]/ul/li[6]/a')
      .waitForElementVisible("html/body", 2000)
      .pause(1000) // To avoid "Error while running .clickElement() protocol action:
      // stale element reference: element is not attached to the page document" error
      .click('//*[@id="main"]/section/div[11]/div[1]/div/div[5]/div/div/a[2]/span')
      .waitForElementVisible("html/body", 2000)
      .assert.visible('//a[text()="Kuula"]')
      .pause(2000) // Without pause button moves below screen cause ad loads slowly
      .moveToElement('//a[text()="Kuula"]', 0, 0)
      .saveScreenshot(`${config.imgpath(browser)}ekspress.png`)
      .end();
  },
};
