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
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Ametlikud Teadaanded (AT)") // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  "search for kassid -> loomakaitse": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .setValue("input[name='query']", "kass")
      .click("input[title='Otsi']")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//a[@href='http://loomakaitse.eu/']")
      .assert.urlContains("loomakaitse.eu")
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse-eu.png`)
      .end();
  },
  "Postkast login test": function (browser) {
    browser
      .url('https://rate.ee/login')
      .useCss()
      .waitForElementVisible("body", 2000) // css
      .click('a.icn-messages') // css
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.") // css
      .saveScreenshot(`${config.imgpath(browser)}rate-ee-postkast.png`)
      .end();
  },
  "example.com -> IANA-managed Reserved Domains": function (browser) {
    browser
      .url("http://example.com/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Example Domain")
      .useXpath()
      .assert.containsText("//a[@href='https://www.iana.org/domains/example']", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
      .click("//a[@href='https://www.iana.org/domains/example']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.title("IANA — IANA-managed Reserved Domains")
      .saveScreenshot(`${config.imgpath(browser)}example-extra-com.png`)
      .end();
  },
  "google.com -> wikipedia.com": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000) // css
      .setValue("input[type='text']", ["cat", browser.Keys.ENTER])
      .waitForElementVisible("body", 2000)
      .assert.titleContains("cat")
      .saveScreenshot(`${config.imgpath(browser)}wikipedia-com.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", "Cat - Wikipedia")
      .click("//a[@href='https://en.wikipedia.org/wiki/Cat']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Felis catus")
      .end();
  },
  "NightwatchJS test": function (browser) {
    browser
      .url("https://nightwatchjs.org")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='navbar']/ul/li[4]/a")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a")
      .click("//*[@id='expect-elements-count']")
      .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}countTitle.png`)
      .end();
  },
  "Ekspress test": function (browser) {
    browser
      .useCss()
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 10000) // css
      .useXpath()
      .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
      .click("//*[@id='header']/div[1]/ul/li[3]/a")
      .useCss()
      .waitForElementVisible("body", 10000)
      .useXpath()
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a")
      .pause(2000)
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]/a")
      .useCss()
      .waitForElementVisible("body", 10000)
      .useXpath()
      .click("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/div/h1")
      .useCss()
      .waitForElementVisible("body", 10000)
      .useXpath()
      .assert.elementPresent("//a[@class='article__listen']")
      .saveScreenshot(`${config.imgpath(browser)}delfi-ee.png`)
      .end();
  },
  "TTC test": function (browser) {
    browser
      .useCss()
      .url("https://tamrieltradecentre.com/")
      .waitForElementVisible("body", 3000) // css
      .useXpath()
      .click("//a[@href='#euTab']")
      .click("//*[@id='euTab']/div/div[1]/button")
      .waitForElementVisible("//a[@href='/pc/Trade/Search']", 2000)
      .useXpath()
      .click("//a[@href='/pc/Trade/Search']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='body']/table/tbody/tr[3]/td[2]/section/div/form/div[2]/div[1]/div/select")
      .useCss()
      .click("option[value='PriceCheck']")
      .click("select[name='SearchType'] option[value='PriceCheck']")
      .useXpath()
      .setValue("//*[@id='ItemNamePattern']", "Corn Flower")
      .useCss()
      .click('#open-in-new-tab-checkbox')
      .useXpath()
      .click("//*[@id='body']/table/tbody/tr[3]/td[2]/section/div/form/div[4]/div/div/div[1]/input")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.urlContains("SearchResult")
      .saveScreenshot(`${config.imgpath(browser)}ttc-com.png`)
      .end();
  },
};
