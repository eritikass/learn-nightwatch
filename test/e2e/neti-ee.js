const config = require("../../nightwatch.conf.js");

module.exports = {
  "Riik ja Ühiskond -> Valitsus": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Riik ja Ühiskond") // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus") // xpath
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Ametlikud Teadaanded (AT)") // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  "Koduloomad -> Eestimaa Loomakaitse Liit": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .clearValue('input[title="Otsi Netist"]')
      .setValue('input[title="Otsi Netist"]', 'Kass')
      .click('input[title="Otsi"]')
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad") // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']") // xpath
      .click("//a[@href='http://loomakaitse.eu/']")
      .assert.urlContains("loomakaitse.eu") // css
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse.png`)
      .end();
  },
};
