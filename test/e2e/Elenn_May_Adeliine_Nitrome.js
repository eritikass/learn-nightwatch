const config = require('../../nightwatch.conf.js');

module.exports = {
    '@tags' : ['nitrome'],
    'Open nitrome' : function (browser){
        browser
        .url('http://www.nitrome.com/')
        .pause(1000)
        .waitForElementVisible('body')
        .pause(1000)
        .click('a[href="/all-games/"]')
        .pause(1000)
        .saveScreenshot(`${config.imgpath(browser)}nitrome1.png`)
        .pause(1000)
        
    }
}