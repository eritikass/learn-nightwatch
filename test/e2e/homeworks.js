const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for neti: Ametlikud Teadaanded": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText('body', 'Riik ja Ühiskond') // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", 'Valitsus') // xpath
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText('body', 'Ametlikud Teadaanded (AT)') // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  "Test for neti: Koduloomad": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", 'Koduloomad') // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .useXpath()
      .click("//a[@href='http://loomakaitse.eu/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.urlContains('http://loomakaitse.eu/') // css
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse.png`)
      .end();
  },
  "Test for rate": function (browser) {
    browser
      .url("https://rate.ee/")
      .waitForElementVisible("body", 2000) // css
      .click('a.icn-messages')
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.") // css
      .saveScreenshot(`${config.imgpath(browser)}rate.png`)
      .end();
  },
  "Test for example": function (browser) {
    browser
      .url("http://example.com/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText('body', 'Example Domain') // css
      .useXpath()
      .assert.containsText("//a[@href='https://www.iana.org/domains/example']", 'More information...') // xpath
      .saveScreenshot(`${config.imgpath(browser)}example-more-information.png`)
      .click("//a[@href='https://www.iana.org/domains/example']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.title('IANA — IANA-managed Reserved Domains') // css
      .saveScreenshot(`${config.imgpath(browser)}example-IANA.png`)
      .end();
  },
  "Test for google": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000) // css
      .assert.titleContains('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'cat')
      .assert.visible('input[type=submit]')
      .click('input[type=submit]')
      .getTitle(function (title) {
        this.assert.ok(title.includes("cat"));
      });
    browser
      .saveScreenshot(`${config.imgpath(browser)}google-cat.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", 'Wikipedia') // xpath
      .click("//a[@href='https://en.wikipedia.org/wiki/Cat']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText('body', 'Felis catus') // css
      .end();
  },
  /* "Test for nightwatchjs": function (browser) {
        browser
        .url("https://nightwatchjs.org/")
        .waitForElementVisible("body", 2000) // css
        .useXpath()
        .click("//a[@href='/api']") // xpath ?või "//*[@id='navbar']/ul/li[4]/a"
        .useCss()
        .waitForElementVisible("body", 500) // css
        .useXpath()
        .click("//a[@href='/api/expect/']") // xpath
        .useCss()
        .waitForElementVisible("body", 500) // css
        .useXpath()
        .click("//a[@href='#assert-title']") // xpath
        .useCss()
        .assert.containsText('expect-elements-count', '.elements().count')
        .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
        .end();
    }, */
};
