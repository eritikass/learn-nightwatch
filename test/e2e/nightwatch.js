const config = require('../../nightwatch.conf.js');

module.exports = {
  'Nightwatch API': function Nightwatch(browser) {
    browser
      .url("https://nightwatchjs.org/")
      .waitForElementVisible("body", 500) // css
      .resizeWindow(1200,800) // define new window size
      .pause (500)
      .useXpath()
      .click('//div[@id="navbar"]//a[text()="API Reference"]') // xpath/*/
      .useCss()
      .waitForElementVisible("body", 500)
      .resizeWindow(800,1000) // define new window size
      .pause (500)
      .useXpath()
      .click('//*[@id="api-container"]//a[text()="Expect"]')
      .useCss()
      .waitForElementVisible("body", 100)
      .resizeWindow(1200,1500) // define new window size
      .pause (2000)
      .useXpath()
      .click('//*[@id="api-container"]//a[text()="count"]')
      .useCss()
      .waitForElementVisible("body", 500)
      .useXpath()
      .assert.containsText('//*[@id="expect-elements-count"]', ".elements().count")
      .useCss()
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-count.png`)
      .end();
    },
  };