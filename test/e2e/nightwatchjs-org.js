const config = require("../../nightwatch.conf.js");

module.exports = {
  tags: 'nightwatch',
  "Testing nightwatchjs.org...": function (browser) {
    browser
        .maximizeWindow()
        .url("https://nightwatchjs.org")
        .waitForElementVisible("body", 2000)
        .useXpath()
            .click("/html/body/section[1]/div/div[4]/section[1]/div/nav/div/div[2]/ul/li[4]/a")
            .click("//a[@href='/api/expect/']")
            .waitForElementVisible("//a[@href='#expect-elements-count']")
            .click("//a[@href='#expect-elements-count']")
        .useCss()
            .assert.containsText("h3#expect-elements-count", '.elements().count')
            .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
        .end()
    }
}