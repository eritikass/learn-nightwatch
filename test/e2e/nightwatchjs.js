const conf = require('../../nightwatch.conf.js');

module.exports = {
  "API ref elements count": function (browser) {
    browser
      .url("https://www.nightwatchjs.org/")
      .waitForElementVisible("body", 2000)
      .assert.containsText('nav', "API")
      //.verify.visible('.li')
      //.click('link text', 'api')
      //.useXpath()
      //.click("//*[contains(text(), 'About')]")
      //.saveScreenshot(`${conf.imgpath(browser)}nightwtc-com-object.png`)

      //.click("//a[@href='/api']") // xpath

      /* .setValue('input[type=text]', ['cat', browser.Keys.ENTER])
      .waitForElementVisible("body", 2000)
      .getTitle(function(title) {
        this.assert.ok(title.includes("cat"));
      })
      .saveScreenshot(`${conf.imgpath(browser)}google-com-titlecat.png`)
      .assert.containsText('body', "Wikipedia")
      //.useXpath()
      .useXpath()
      .click("//*[contains(text(), 'Wikipedia')]")
      .useCss()
      .assert.containsText('body', "Felis catus")
      .saveScreenshot(`${conf.imgpath(browser)}google-com-feliscatus.png`) */
      .end();
  },
};


 /* * Open "https://nightwatchjs.org/"
 * Click "API Reference"
 * Open "Expect" -> "count"
 * Check count title is ".elements().count"
 * take screenshot */
