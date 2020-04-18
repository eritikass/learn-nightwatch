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
  "Test for nightwatchjs": function (browser) {
        browser
        .url("https://nightwatchjs.org/")
        .waitForElementVisible("body", 1000) // css
        .resizeWindow(1200, 800)
        .waitForElementVisible("body", 1000) // css
        .useXpath()
        .click('//div[@id="navbar"]//a[text()="API Reference"]') // xpath
        .useCss()
        .waitForElementVisible("body", 500) // css
        .useXpath()
        .click("//a[@href='/api/expect/']") // xpath ??
        .useCss()
        .waitForElementVisible("body", 500) // css
        .useXpath()
        .click("//a[@href='#expect-elements-count']") // xpath ??
        .useCss()
        .assert.containsText('#expect-elements-count', '.elements().count')
        .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
        .end();
    },
    /*"Test for ekspress": function (browser) {
      browser
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 1000)
      .resizeWindow(1200, 800)
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//a[@href='areen']")
      .useCss()
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//a[@href='/teema/kirjandus']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//a[@href='#']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .setValue('a.pager__button', '3')
      .useXpath()
      .waitForElementVisible('//div[@class="pager-wrapper"]//a[@class="pager__button"]//a[text()="3"]')
      .click('//div[@class="pager-wrapper"]//a[@class="pager__button"]//a[text()="3"]')
      //.useCss()
      //.waitForElementVisible("body", 2000)
      .pause(3000)
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click('(//div[@class="headline"])[last()]')
      //kuula
      .saveScreenshot(`${config.imgpath(browser)}ekspress.png`)
    },*/
};

    /*
browser
      .url("https://rate.ee/register")
      .waitForElementVisible("body")
      .resizeWindow(1200, 800)
      .useXpath()
      //   .click('//a[@href="/kasutatud/kasutatud.php"]')
      .click("//a[@id='fake-city']")
      .useCss()
      .waitForElementVisible('#modal-city-name')
      .setValue('#modal-city-name', 'tallinn')
      .useXpath()
      .waitForElementVisible('//button[text()="Tallinn (Harju maakond)"]')
      .click('//button[text()="Tallinn (Harju maakond)"]')
      .pause(2000);
*/