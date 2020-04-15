const config = require("../../nightwatch.conf.js");

module.exports = {
  "search for kassid -> loomakaitse": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("input[name='query']", 1000) // css
      .setValue("input[name='query']", "kass")
      .click("input[title='Otsi']")
      .waitForElementVisible("body", 1000)
      .useXpath()
      .waitForElementVisible("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", 1000)
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .useCss()
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//a[@href='http://loomakaitse.eu/']")
      .assert.urlContains("loomakaitse.eu")
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse-eu.png`)
      .end();
  },
};