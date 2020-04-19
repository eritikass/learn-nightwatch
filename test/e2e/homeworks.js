const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for neti": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .assert.containsText('body', 'Riik ja Ühiskond')
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus") // xpath
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500)
      .assert.containsText('body', 'Ametlikud Teadaanded (AT)')
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },

  "Test for kass": function (browser) {
    browser
      .url("https://www.neti.ee")
      .waitForElementVisible("body", 2000)
      .setValue('input[type=text]', ['kass',browser.Keys.ENTER])
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
      .useCss()
      .waitForElementVisible("body", 2000)
      .url("http://loomakaitse.eu/")
      .waitForElementVisible("body", 2000)
      browser.assert.urlEquals("http://loomakaitse.eu/")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-kass.png`)
      .end();
      
  },

  "Test for rate": function (browser) {
    browser
      .url("https://www.rate.ee/login")
      .waitForElementVisible("body", 2000)
      .click('a.icn-messages')
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.")
      .saveScreenshot(`${config.imgpath(browser)}rate-ee-postkast.png`)
      .end();
  },

  "Test fot example": function (browser) {
    browser
      .url("https://www.example.com/")
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Example Domain")
      .assert.containsText("a[href='https://www.iana.org/domains/example']", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
      .click("a[href='https://www.iana.org/domains/example']")
      .waitForElementVisible('body')
      .assert.title('IANA — IANA-managed Reserved Domains')
      .saveScreenshot(`${config.imgpath(browser)}iana-Example.png`)
      .end();
  },

  "Test for Google cat": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000)
      .setValue('input[type=text]', ['cat',browser.Keys.ENTER])
      .getTitle(function (title) {this.assert.ok(title.includes("cat"));})
      .saveScreenshot(`${config.imgpath(browser)}google-cat.png`)
      .assert.containsText('body', "Wikipedia")
      .useXpath()
      .click("//*[contains(text(), 'Wikipedia')]")
      .useCss()
      .assert.containsText('body', "Felis catus")
      .saveScreenshot(`${config.imgpath(browser)}google-felis.png`)
      .end();
  },
  "Test for Nightwatch": function (browser) {
    browser
      .url("https://www.nightwatchjs.org/")
      .waitForElementVisible("body", 2000)
      .resizeWindow(1500, 800)
      .useXpath()
      .click('//div[@id="navbar"]//a[text()="API Reference"]')
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click('//*[@id="api-container"]/div[2]/div/div/div[1]/div/ul/li[2]/a')
      .click("//a[contains(text(),'count')]")
      .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
      .end();
  },
  "Test for Ekspress": function (browser) {
    browser
      .url('https://ekspress.delfi.ee/')
      .resizeWindow(1200, 700)
      .useXpath()
      .click("//a[@class='navigation-top__link has-children'][contains(text(),'Areen')]")
      .click("//a[@class='header__navigation-bottom__link'][contains(text(),'Kirjandus')]")
      .useCss()
      .pause(4000)
      .useXpath()
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]")
      .resizeWindow(700, 1500)
      .pause(4000)
      .useXpath()
      .assert.urlEquals('https://ekspress.delfi.ee/teema/kirjandus?page=3')
      .click("(//div[@class='headline'])[last()]")
      .waitForElementVisible("//div[@class='col-sm-24 col-md-8 text-right']//a[text()='Kuula']", 3000, "Kuula - OK")
      .saveScreenshot(`${config.imgpath(browser)}ekspress-delfi.png`)
      .pause(4000)
      .end();
  },
};