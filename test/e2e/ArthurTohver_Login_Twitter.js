var config = require('../../nightwatch.conf.js');

module.exports = {
    '@tags': ['BoyishGiggles'],
    before: function(browser) {
        browser.resizeWindow(1300, 800);
    },
    'Twitter Login :)': function(browser) {
        browser
            .url('https://twitter.com/')

        .waitForElementVisible('body')
            .pause(1000)
            .assert.urlContains('twitter')
            .saveScreenshot(config.imgpath(browser) + 'twitterstart.png')
            .pause(500)
            .setValue('input[name="session[username_or_email]"]', 'boyishgiggles11')
            .pause(500)
            .setValue('input[name="session[password]"]', 'DOMEGALULC')
            .pause(500)

        .click('input[value="Log in"]')
            .moveToElement('input[value="Log in"]', 0, 0)
            .mouseButtonClick(0)
            //.assert.containsText('DisRespect')
            .click('div[name="tweet"]')
            .moveToElement('div[name="tweet"]', 0, 0)
            .mouseButtonClick(0)
            .pause(500)
            .setValue('div[name="tweet"]', 'D OMEGALUL C')
            .pause(500)
            .click('button[class="tweet-action EdgeButton EdgeButton--primary js-tweet-btn"]', browser.Keys.ENTER)
            .saveScreenshot(config.imgpath(browser) + 'logindata.png')
            .pause(1000)
            .end();
    }
};