const config = require("../../nightwatch.conf.js");

module.exports = {
  "Riik ja Ühiskond -> Valitsus": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 5000) // css
      .assert.containsText("body", "Riik ja Ühiskond") // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus") // xpath
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible("body", 5000) // css
      .assert.containsText("body", "Ametlikud Teadaanded (AT)") // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  "search for kassid -> loomakaitse": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("input[name='query']", 5000) // css
      .setValue("input[name='query']", "kass")
      .click("input[title='Otsi']")
      .waitForElementVisible("body", 5000)
      .useXpath()
      .waitForElementVisible("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", 5000)
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .waitForElementVisible("//a[@href='http://loomakaitse.eu/']", 5000)
      .click("//a[@href='http://loomakaitse.eu/']")
      .assert.urlContains("loomakaitse.eu")
      .saveScreenshot(`${config.imgpath(browser)}loomakaitse-eu.png`)
      .end();
  },
  "Postkast login test": function (browser) {
    browser
      .useCss()
      .url('https://rate.ee/login')
      .waitForElementVisible("body", 5000) // css
      .click('a.icn-messages') // css
      .waitForElementVisible("body", 5000) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.") // css
      .saveScreenshot(`${config.imgpath(browser)}rate-ee-postkast.png`)
      .end();
  },
  "example.com -> IANA-managed Reserved Domains": function (browser) {
    browser
      .url("http://example.com/")
      .waitForElementVisible("body", 5000) // css
      .assert.containsText("body", "Example Domain")
      .useXpath()
      .assert.containsText("//a[@href='https://www.iana.org/domains/example']", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
      .click("//a[@href='https://www.iana.org/domains/example']")
      .useCss()
      .waitForElementVisible("body", 5000)
      .assert.title("IANA — IANA-managed Reserved Domains")
      .saveScreenshot(`${config.imgpath(browser)}example-extra-com.png`)
      .end();
  },
  "google.com -> wikipedia.com": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 5000) // css
      .waitForElementVisible("input[type='text']", 5000)
      .setValue("input[type='text']", "cat")
      .click("input[type='submit']")
      .waitForElementVisible("body", 5000)
      .assert.titleContains("cat")
      .saveScreenshot(`${config.imgpath(browser)}wikipedia-com.png`)
      .useXpath()
      .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", "Cat - Wikipedia")
      .click("//a[@href='https://en.wikipedia.org/wiki/Cat']")
      .useCss()
      .waitForElementVisible("body", 5000)
      .assert.containsText("body", "Felis catus")
      .end();
  },
  "NightwatchJS test": function (browser) {
    browser
      .url("https://nightwatchjs.org")
      .waitForElementVisible("body", 5000)
      .useXpath()
      .waitForElementVisible("//*[@id='navbar']/ul/li[4]/a", 5000)
      .click("//*[@id='navbar']/ul/li[4]/a")
      .useCss()
      .waitForElementVisible("body", 5000)
      .useXpath()
      .waitForElementVisible("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a", 5000)
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a")
      .pause(1000)
      .click("//*[@id='expect-elements-count']")
      .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}countTitle.png`)
      .end();
  },
  "Ekspress test": function (browser) {
    browser
      .useCss()
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 5000) // css
      .useXpath()
      .waitForElementVisible("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a", 5000)
      .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
      .waitForElementVisible("//*[@id='header']/div[1]/ul/li[3]/a", 5000)
      .click("//*[@id='header']/div[1]/ul/li[3]/a")
      .useCss()
      .waitForElementVisible("body", 5000)
      .useXpath()
      .waitForElementVisible("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a", 5000)
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a")
      .waitForElementVisible("//*[@id='main']/section/div[1]/div[1]/ul/li[6]/a", 5000)
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]/a")
      .waitForElementVisible("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/div/h1", 5000)
      .click("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/div/h1")
      .useCss()
      .waitForElementVisible("body", 5000)
      .useXpath()
      .assert.elementPresent("//a[@class='article__listen']")
      .saveScreenshot(`${config.imgpath(browser)}delfi-ee.png`)
      .end();
  },
  "TTC test": function (browser) {
    browser
      .useCss()
      .url("https://tamrieltradecentre.com/")
      .waitForElementVisible("body", 5000) // css
      .useXpath()
      .waitForElementVisible("//a[@href='#euTab']", 5000)
      .click("//a[@href='#euTab']")
      .click("//*[@id='euTab']/div/div[1]/button")
      .waitForElementVisible("//a[@href='/pc/Trade/Search']", 5000)
      .click("//a[@href='/pc/Trade/Search']")
      .useCss()
      .waitForElementVisible("body", 5000)
      .useXpath()
      .waitForElementVisible("//*[@id='body']/table/tbody/tr[3]/td[2]/section/div/form/div[2]/div[1]/div/select", 2000)
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
      .waitForElementVisible("body", 5000)
      .assert.urlContains("SearchResult")
      .saveScreenshot(`${config.imgpath(browser)}ttc-com.png`)
      .end();
  },
};
