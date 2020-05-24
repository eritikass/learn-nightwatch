const config = require('../../nightwatch.conf.js');

module.exports = {
  'Riik ja Ühiskond -> Valitsus': function Government(browser) {
    browser
      .url('https://www.neti.ee/')
      .waitForElementVisible('body', 2000) // css
      .assert.containsText('body', 'Riik ja Ühiskond') // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", 'Valitsus') // xpath
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible('body', 2000) // css
      .assert.containsText('body', 'Ametlikud Teadaanded (AT)') // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  'Meelelahutus ja Hobid': function Entertainment(browser) {
    browser
      .url('https://www.neti.ee/')
      .waitForElementVisible('body', 2000) // css
      .assert.containsText('body', 'Meelelahutus ja Hobid') // css
      .end();
  },
  ' Search Kass': function Cat(browser) {
    browser
      .url('https://www.neti.ee/')
      .waitForElementVisible('body', 2000) // css
      .clearValue('input[type=text]')
      .setValue('input[type=text]', ['kass', browser.Keys.ENTER])
      .waitForElementVisible('body', 2000) // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", 'Koduloomad') // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .useCss()
      .waitForElementVisible('body', 500) // css
      .useXpath()
      .click("//a[@href='http://loomakaitse.eu/']")
      .useCss()
      .waitForElementVisible('body', 500) // css
      .assert.urlContains('loomakaitse.eu') // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-kass.png`)
      .end();
  },
};
