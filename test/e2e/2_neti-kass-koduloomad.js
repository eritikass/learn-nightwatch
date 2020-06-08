const config = require ("../../nightwatch.conf.js");

module.exports = {
"neti-kass-test": function (browser) {
    browser.url("https://www.neti.ee")
    browser.waitForElementVisible('body')
      .pause(3000)
      //.saveScreenshot(`${config.imgpath(browser)}neti-ee-kass-1.png`)
      browser.setValue('input[type=text]', ['kass', browser.Keys.ENTER])
      //.saveScreenshot(`${config.imgpath(browser)}neti-ee-kass-2.png`)
      .useXpath()
      browser.assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
      .useCss()
      browser.waitForElementVisible('body')
      .pause(3000)
      //.saveScreenshot(`${config.imgpath(browser)}neti-ee-kass-3.png`)
      browser.url("http://loomakaitse.eu/")
      browser.waitForElementVisible('body')
      .pause(3000)
      //.saveScreenshot(`${config.imgpath(browser)}neti-ee-kass-4.png`)
    browser.assert.urlEquals("http://loomakaitse.eu/")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-kass-5.png`)
      browser.end();
  },
}