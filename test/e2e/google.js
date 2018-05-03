var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
    '@tags': ['googleSite'],
    'Google Assert Title': function(browser) {
        browser
            .url('https://www.google.ee')
            .pause(1000)
            .waitForElementVisible('body')
            .saveScreenshot(config.imgpath(browser) + 'google1.png')
            .pause(1000)
            .assert.title('Google')
            .pause(1000)

        browser
            .setValue('input[type=text]',['cat', browser.Keys.ENTER])
            .pause(1000)
            .waitForElementVisible('body')
            .saveScreenshot(config.imgpath(browser) + 'google2.png')
            .end();
    }
};
