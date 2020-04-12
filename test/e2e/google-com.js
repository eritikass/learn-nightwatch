const conf = require('../../nightwatch.conf.js');

module.exports = {
  "Find Felis catus": function (browser) {
    browser
      .url("https://www.google.com")
      .waitForElementVisible("body", 2000)
      .setValue('input[type=text]', ['cat', browser.Keys.ENTER])
      .waitForElementVisible("body", 2000)
      .getTitle (function(title) {
        this.assert.ok(title.includes("cat"));
      })
      .saveScreenshot(`${conf.imgpath(browser)}google-com-titlecat.png`)
      .assert.containsText('body', "Wikipedia")
      .useXpath()
      .click("//*[contains(text(), 'Wikipedia')]")
      .useCss()
      .assert.containsText('body', "Felis catus")
      //  .saveScreenshot(`${conf.imgpath(browser)}google-com-feliscatus.png`)
      .end();
  },
};
