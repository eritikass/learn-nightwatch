const config = require("../../nightwatch.conf.js");

module.exports = {
  "nightwatch": function (browser) {
    browser
    .url("https://www.nightwatchjs.org/")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click('//*[@id="navbar"]/ul/li[4]/a') // xpath
    .useCss()
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click('//*[@id="api-container"]/div[2]/div/div/div[1]/div/ul/li[2]/a') // xpath
    .click('//*[@id="api-container"]/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[20]/a') // xpath
    .useCss()
    .assert.containsText('body', ".elements().count")
    .saveScreenshot(`${config.imgpath(browser)}ElCount.png`)
    .end();
  },
};