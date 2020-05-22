const config = require("../../nightwatch.conf.js");

module.exports = {
    tags: 'err',
    "Testing err.ee...": function (browser) {
        browser
            .maximizeWindow()
            .url("https://err.ee")
            .waitForElementVisible("body")
            .setValue('input[name=phrase]', ["chuck norris", browser.Keys.ENTER])
            .waitForElementVisible("body")
            .useXpath()
                .click('//a[text()="Jüri Muttika ja Hannes Hermaküla lugesid üksteisele Chuck Norrise teemalisi nalju"]')
            .pause(3000)
            .end()
    }
}