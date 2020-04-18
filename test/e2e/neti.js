const config = require('../../nightwatch.conf.js');

module.exports = {
  'Test for neti': function (browser) {
    browser
      .url('https://www.neti.ee/')
      .waitForElementVisible("body")
      .assert.containsText("body", "Riik ja Ühiskond")
      .useXpath().assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", 'Valitsus')
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']")
      .useCss()
      .waitForElementVisible('body')
      .assert.containsText("body", "Ametlikud Teadaanded (AT)")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },

  "Meelelahutus ja Hobid": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Meelelahutus ja Hobid") // css
      .end();
  },

};
