const config = require('../../nightwatch.conf.js');

module.exports = {
  'Test for neti': function (browser) {
    browser
      .url('https://www.neti.ee/')
      .waitForElementVisible("body")
      .assert.containsText("body", "Riik ja Ühiskond")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .useXpath().assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", 'Valitsus')
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']")
      .useCss()
      .waitForElementVisible('body')
      .assert.containsText("body", "Ametlikud Teadaanded (AT)")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-ametli.png`)
      .end();
  },

  //  * Open https://www.neti.ee/
  //  * Search "kass"
  //  * Check that page contains link to "Koduloomad"
  //  * Open "Koduloomad"
  //  * Open "Eestimaa Loomakaitse Liit"
  //  * Check url contains "loomakaitse.eu"
  //  * Take screenshot
  "Test for neti - Kass": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .setValue('input NETIMenu', 'kass')
      .assert.containsText("href", "Koduloomad")
      .end();
  },

  'Test for rate': function (browser) {
    browser
      .url('https://www.rate.ee/')
      .waitForElementVisible("body")
      .useXpath().click("//a[@href='https://rate.ee/mailbox']")
      .useCss()
      .waitForElementVisible("body")
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.")
      .end();
  },


  // * Open http://example.com/
  // * test that page contains text "Example Domain"
  // * test that page has link "More information..."
  // * take screenshot
  // * click link "More information..."
  // * wait until new page opens
  // * test that title is "IANA — IANA-managed Reserved Domains"
  // * take screenshot

  "Test for Example.com": function (browser) {
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

  // * Open https://www.google.com/
  // * Search "cat"
  // * Check title contains "cat"
  // * Take screenshot
  // * Check that page has wikipedia link
  // * Open wikipedia link to article about cat
  // * Check that article contains latin name -> "Felis catus"

  "Test for cat - Google.com": function (browser) {
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


  //  * Open "https://nightwatchjs.org/"
  //  * Click "API Reference" 
  //  * Open "Expect" -> "count"
  //  * Check count title is ".elements().count"
  //  * take screenshot

  "Test for NightwatchJS.org": function (browser) {
    browser
      .url("https://nightwatchjs.org")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='navbar']/ul/li[4]/a")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a")
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[20]/a")
      .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}nightwatch_countTitle.png`)
      .end();
  },



  // * Open "https://ekspress.delfi.ee/"
  // * open "Areen" -> "Kirjandus"
  // * move to 3'rd page 
  // * open last article from listing
  // * Check that article has "kuula" button
  // * Take screenshot

  "Test for Ekspress": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .pause(2000)
      .useXpath()
      .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
      .pause(1000)
      .click("//*[@id='header']/div[1]/ul/li[3]/a")
      .useCss()
      .pause(3000)
      .useXpath()
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]/a")
      .useCss()
      .pause(3000)
      .click("(//div[@class='headline'])[last()]")
      .waitForElementVisible("//div[@class='col-sm-24 col-md-8 text-right']//a[text()='Kuula']", 2000, "Kuula nupp on olemas")
      .saveScreenshot(`${config.imgpath(browser)}ekspress_test.png`)
      .pause(2000)
      .end();
  }
};