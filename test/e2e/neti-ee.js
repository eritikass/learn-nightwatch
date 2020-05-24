const config = require("../../nightwatch.conf.js");

module.exports = {
  tags: 'neti',
  "Test for neti.ee": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body") // css
      .assert.containsText('body', 'Riik ja Ühiskond') // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", 'Valitsus') // xpath
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible("body") // css
      .assert.containsText('body', 'Ametlikud Teadaanded (AT)') // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  "Koduloomad ja loomakaitse": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body") // css
      .setValue('input[name=query]', 'kass')
      .click('input[type=submit]')
      .waitForElementVisible("body")
      .useXpath()
        .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", 'Koduloomad')
        .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .useCss()
        .waitForElementVisible("body")
      .useXpath()
        .assert.containsText("//a[@href='http://loomakaitse.eu/']", 'Eestimaa Loomakaitse Liit')
        .click("//a[@href='http://loomakaitse.eu/']")
      .useCss()
        .waitForElementVisible("body")
      .useXpath()
        .assert.urlContains("loomakaitse.eu")
        .saveScreenshot(`${config.imgpath(browser)}neti-ee-loomakaitse.png`)
      .end();
  },
};
