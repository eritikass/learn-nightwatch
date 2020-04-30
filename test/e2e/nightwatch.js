const config = require("../../nightwatch.conf.js");

module.exports = {
  "nightwatch": function (browser) {
    browser
    .url("https://www.nightwatchjs.org/")
    .waitForElementVisible('body', 2000)
    .resizeWindow(1200, 800)
    .useXpath()
    .click('//div[@id="navbar"]//a[text()="API Reference"]') // xpath
    .useCss()
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click('//section[@id="api-container"]//a[text()="Expect"]') // xpath
    .useCss()
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click('//section[@id="api-container"]//a[text()="count"]') // xpath
    .useCss()
    .waitForElementVisible('body', 2000)
    .assert.containsText('body', ".elements().count")
    .saveScreenshot(`${config.imgpath(browser)}ElCount.png`)
    .end();
  },
};