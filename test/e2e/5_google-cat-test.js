const config = require ("../../nightwatch.conf.js");

module.exports = {
"cat-google-test": function (browser) {
    browser
      .url("https://www.google.com/")  
      .waitForElementVisible('body')
      .pause(3000)
      .setValue('input[type=text]', ['cat', browser.Keys.ENTER])
      .getTitle(function (title) { this.assert.ok(title.includes('cat')); })
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}AA_cat-google.png`)
      .assert.containsText('body', "Wikipedia")
      .useXpath()
      .click("//*[contains(text(), 'Wikipedia')]")
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}AA_cat-google-2.png`) 
      .useCss()
      .assert.containsText('body', "Felis catus")
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}AA_felis-google.png`) 
      .end()
    },
};

