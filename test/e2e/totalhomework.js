const config = require ("../../nightwatch.conf.js");



module.exports = {

//2-test
"2_neti-kass-test": function (browser) {
    browser.url("https://www.neti.ee")
    browser.waitForElementVisible('body')
    .pause(3000)
    browser.setValue('input[type=text]', ['kass', browser.Keys.Enter])
    .useXpath()
    browser.assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
    .useCss()
    browser.waitForElementVisible('body')
    .pause(3000)
    browser.url("http://loomakaitse.eu/")
    browser.waitForElementVisible('body')
    .pause(3000)
    browser.assert.urlEquals("http://loomakaitse.eu/")
    .saveScreenshot(`${config.imgpath(browser)}neti-ee-kass-5.png`)
    browser.end();
  },


//3-test
    "3_Rate-login-regkasutaja-test": function (browser) {
    browser.url('https://rate.ee/login')
    browser.waitForElementVisible('body') 
    .pause(3000)
    browser.click('a.icn-messages')
    browser.waitForElementVisible('body')
    .pause(3000)
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
};