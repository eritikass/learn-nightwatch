const config = require('../../nightwatch.conf.js');

module.exports = {
    '@tags' : ['gamesgames'],
    'Open gamesgames': function (browser) {
        browser
        .url('http://www.gamesgames.com/')
        .pause(1000)
        .waitForElementVisible('body')
        .pause(1000)
        .saveScreenshot(`${config.imgpath(browser)}gamesgames.png`)
        .pause(1000)
    }
}