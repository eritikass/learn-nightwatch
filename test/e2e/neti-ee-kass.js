const config = require("../../nightwatch.conf.js");

module.exports = {
  "Neti -> Kass": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 5000) // css
      .resizeWindow(1400, 1000)
      .setValue('input[type=text]', 'kass')
      .waitForElementVisible("body", 5000)
      .useXpath()
      .click('//input[@class="button sprite"]')
      .useCss()
      .waitForElementVisible("body", 5000)
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "oduloomad") // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']") // xpath
      .click("//a[@href='http://loomakaitse.eu/']") //
      .useCss()
      .waitForElementVisible("body", 5000) // css
      .assert.urlContains("loomakaitse.eu")
      .waitForElementVisible("body", 5000) // css
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse.png`)
      .end();
  },
};
