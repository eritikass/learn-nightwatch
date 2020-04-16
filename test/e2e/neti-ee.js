const config = require("../../nightwatch.conf.js");

module.exports = {
  "Riik ja Ühiskond -> Valitsus": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Riik ja Ühiskond") // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus") // xpath
      .useCss()
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .useXpath()
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500)
      .assert.containsText("body", "Ametlikud Teadaanded (AT)")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-AT.png`)
      .end();
  },

  Loomakaitse(browser) {
    browser
      .url("https://www.neti.ee/")
      .setValue('input[type=text]', ['kass', browser.Keys.ENTER])
      .waitForElementVisible("body", 2000)
      .pause(3000)
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad") // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Eestimaa Loomakaitse Liit") // css
      .useXpath()
      .click("//*[contains(text(), 'Loomakaitse')]")
      .useCss()
      .assert.urlContains('loomakaitse.eu') // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-loomakaitse.png`)
      .end();
  },
  /* "Meelelahutus ja Hobid": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Meelelahutus ja Hobid") // css
      .end();
  }, */
};
