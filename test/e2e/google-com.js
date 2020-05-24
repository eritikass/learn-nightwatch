const config = require("../../nightwatch.conf.js");

module.exports = {
    tags: 'google',
    "Testing google.ee...": function (browser) {
        browser
            .url("https://www.google.com/")
            .waitForElementVisible("body")
            .setValue('input[name=q]', ['cat', browser.Keys.ENTER])
            .getTitle(function(title) {
                this.assert.ok(title.includes("cat"));
            })
            .useXpath()
                .saveScreenshot(`${config.imgpath(browser)}example.png`)
                .assert.containsText("//a[@href='https://en.wikipedia.org/wiki/Cat']", 'Cat - Wikipedia')
                .click("//a[@href='https://en.wikipedia.org/wiki/Cat']")
            .useCss()
                .waitForElementVisible("body")
                .assert.containsText("body", 'Felis catus')
            .end();
    }
}