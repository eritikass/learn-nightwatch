const config = require ("../../nightwatch.conf.js");

module.exports = {

//2-test
"2_neti-kass-test": function (browser) {
    browser.url("https://www.neti.ee")
    browser.waitForElementVisible('body', 3000)
    browser.setValue('input[type=text]', ['kass', browser.Keys.Enter])
    .useXpath()
    browser.assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
    .useCss()
    browser.waitForElementVisible('body', 3000)
    browser.url("http://loomakaitse.eu/")
    browser.waitForElementVisible('body', 3000)
    browser.assert.urlEquals("http://loomakaitse.eu/")
    .saveScreenshot(`${config.imgpath(browser)}neti-ee-kass-5.png`)
    browser.end();
  },

//3-test
"3_Rate-login-regkasutaja-test": function (browser) {
    browser.url('https://rate.ee/login')
    browser.waitForElementVisible('body', 3000) 
    browser.click('a.icn-messages')
    browser.waitForElementVisible('body', 3000)
    browser.assert.containsText('body', "Seda lehte näevad ainult registreeritud kasutajad.") 
    browser.saveScreenshot(`${config.imgpath(browser)}rate-ee-login-reg-kasutaja.png`)
    browser.end();
  },

//4-test
"4_example-com-test": function (browser) {
    browser
        .url('http:www.example.com')
        .waitForElementVisible('body', 3000)
        .assert.containsText("body","Example Domain")
        .assert.containsText("a[href='https://www.iana.org/domains/example']", 'More information...')
        .saveScreenshot(`${config.imgpath(browser)}example-com-more-inf.png`)
        .click("a[href='https://www.iana.org/domains/example']")
        .waitForElementVisible("body")
        .pause(3000)
        .assert.title('IANA — IANA-managed Reserved Domains')
        .saveScreenshot(`${config.imgpath(browser)}example-com-IANA-org.png`)
        .end();
    },

//5-test
"5_cat-google-test": function (browser) {
    browser
      .url("https://www.google.com/")  
      .waitForElementVisible('body')
      .pause(3000)
      .setValue('input[type=text]', ['cat', browser.Keys.ENTER])
      .getTitle(function (title) { this.assert.ok(title.includes('cat')); })
      .saveScreenshot(`${config.imgpath(browser)}AA_cat-google.png`)
      .assert.containsText('body', "Wikipedia")
      .useXpath()
      .click("//*[contains(text(), 'Wikipedia')]")
      .useCss()
      .assert.containsText('body', "Felis catus")
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}AA_felis-google.png`) 
      .end();
    },

//6-test
"count-API_ref-elements-count": function (browser) {
    browser
      .url("https://www.nightwatchjs.org/")
      .waitForElementVisible('body')
      .pause(3000)
      .resizeWindow(1300, 800)
      .pause(3000)
      .useXpath()
      .click('//*[@class="navbar"]//*[text()="API Reference"]')
      .pause(3000)
      .useCss()
      .waitForElementVisible('body')
      .pause(3000)
      .useXpath()
      .click("//a[@href='/api/expect/']")
      .pause(3000)
      .click("//a[@href='#expect-elements-count']")
      .pause(8000)
      .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
      .pause(5000)
      .saveScreenshot(`${conf.imgpath(browser)}nw-elements-count.png`)
      .end();
  },



};