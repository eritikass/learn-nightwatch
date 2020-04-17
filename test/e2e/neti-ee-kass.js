const config = require("../../nightwatch.conf.js");

module.exports = {
  "Neti -> Kass": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .setValue('input[type=text]', 'kass')
      .waitForElementVisible("body", 2000)
      .click('input[type=submit]')
      .waitForElementVisible("body", 2000)
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad") // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']") // xpath
      .click("//a[@href='http://loomakaitse.eu/']") //xpath
      .assert.urlContains("loomakaitse.eu")
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse.png`)
      .end();
  },
};