const config = require ("../../nightwatch.conf.js");

module.exports = {
"example-com-test": function (browser) {
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