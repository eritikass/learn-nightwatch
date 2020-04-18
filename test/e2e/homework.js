const config = require("../../nightwatch.conf.js");


module.exports = {
  "Riik ja Ühiskond -> Valitsus": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Riik ja Ühiskond")
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']")
      .useCss()
      .waitForElementVisible("body", 3000)
      .assert.containsText("body", "Ametlikud Teadaanded (AT)")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  "Koduloomade kaitsemine": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@class='input NETIMenu']")
      .setValue("//*[@class='input NETIMenu']", "kass")
      .click("//*[@id='search-bar']/div[4]/input")
      .useCss()
      .assert.containsText("body", "Koduloomad")
      .useXpath()
      .click("//*[@id='main-content']/div[1]/ul[1]/li[1]/div/h3/a[2]")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='main-content']/div[1]/ul[1]/li[1]/h3/a")
      .assert.urlContains("loomakaitse.eu")
      .saveScreenshot(`${config.imgpath(browser)}kassiKaitse.png`)
      .end();
  },
  "Rate.ee -> Meilikasti test": function (browser) {
    browser
      .url("https://www.rate.ee/")
      .pause(2000)
      .useXpath()
      .click("/html/body/nav/ul[1]/li[4]/a") // xpath
      .useCss()
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad")
      .saveScreenshot(`${config.imgpath(browser)}rateMeil.png`)
      .end();
  },
  "Example.com test": function (browser) {
    browser
      .url("https://www.example.com/")
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Example Domain")
      .assert.containsText("a[href='https://www.iana.org/domains/example']", "More information...")
      .saveScreenshot(`${config.imgpath(browser)}moreinfo.png`)
      .click("a[href='https://www.iana.org/domains/example']")
      .waitForElementVisible('body')
      .assert.title('IANA — IANA-managed Reserved Domains')
      .saveScreenshot(`${config.imgpath(browser)}ianaExample.png`)
      .end();
  },

  "Google.com test": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000)
      .setValue('input[type=text]', 'cat')
      .keys([browser.Keys.ENTER])
      .useCss()
      .waitForElementVisible("body", 2000)
      .getTitle(function (title) {
        this.assert.ok(title.includes("cat"));
      })
      .saveScreenshot(`${config.imgpath(browser)}felisCatus.png`)
      .assert.containsText("a[href='https://en.wikipedia.org/wiki/Cat']", "Wikipedia")
      .click("a[href='https://en.wikipedia.org/wiki/Cat']")
      .assert.containsText("body", "Felis catus")
      .end();
  },
  "NightwatchJS test": function (browser) {
    browser
      .url("https://nightwatchjs.org")
      .waitForElementVisible("body", 2000)
      .resizeWindow(1280, 720)
      .useXpath()
      .click("//*[@id='navbar']/ul/li[4]/a")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a")
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[20]/a")
      .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}countTitle.png`)
      .end();
  },
  "Ekspress test": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .resizeWindow(1280, 720)
      .pause(3000)
      .useXpath()
      .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
      .click("//*[@id='header']/div[1]/ul/li[3]/a")
      .useCss()
      .pause(3000)
      .useXpath()
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]")
      .useCss()
      .pause(3000)
      .useXpath()
      .assert.urlEquals('https://ekspress.delfi.ee/teema/kirjandus?page=3')
      .click("(//div[@class='headline'])[last()]")
      .waitForElementVisible("//div[@class='col-sm-24 col-md-8 text-right']//a[text()='Kuula']", 2000, "Kuula nupp on olemas")
      .saveScreenshot(`${config.imgpath(browser)}ekspress.png`)
      .pause(5000)
      .end();
  },
};
