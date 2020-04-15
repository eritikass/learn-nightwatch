const config = require("../../nightwatch.conf.js");

module.exports = {
  "search for kassid -> loomakaitse": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("input[name='query']", 1000) // css
      .setValue("input[name='query']", "kass")
      .click("input[title='Otsi']")
      .waitForElementVisible("body", 500)
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .click("//a[@href='http://loomakaitse.eu/']")
      .assert.urlContains("loomakaitse.eu")
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse-eu.png`)
      .end();
  },
};
