const config = require("../../nightwatch.conf.js");

module.exports = {
  "Nightwatch": function(browser) {
    browser
    .url("https://nightwatchjs.org/")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("//section[@id='navigation']//li[4]//a[1]")
    .useCss()
    .waitForElementVisible("body", 2000)
    .useXpath()
    .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a")
    .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[20]/a")
    .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
    .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
    .end()
  }
}

/* * Open "https://nightwatchjs.org/"
 * Click "API Reference" 
 * Open "Expect" -> "count"
 * Check count title is ".elements().count"
 * take screenshot */