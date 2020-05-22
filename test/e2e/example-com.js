const config = require("../../nightwatch.conf.js");

module.exports = {
    tags: 'example',
    "Testing example.com...": function (browser) {
    browser
        .url("http://example.com/")
        .waitForElementVisible("body", 2000) // css
        .assert.containsText('body', 'Example Domain')
        .useXpath()
            .assert.containsText("//a[@href='https://www.iana.org/domains/example']", 'More information...')
            .saveScreenshot(`${config.imgpath(browser)}example.png`)
            .click("//a[@href='https://www.iana.org/domains/example']")
        .useCss()
            .waitForElementVisible("body", 500)
        .useXpath()
            .assert.title("IANA — IANA-managed Reserved Domains")
            .saveScreenshot(`${config.imgpath(browser)}example.png`)
        .end()
    }
}