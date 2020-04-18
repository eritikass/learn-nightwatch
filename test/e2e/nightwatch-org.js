const conf = require('../../nightwatch.conf.js');

module.exports = {
  "API ref elements count": function (browser) {
    browser
      .url("https://www.nightwatchjs.org/")
      .waitForElementVisible('body', 2000)
      .resizeWindow(1400, 1000)
      // .pause(2000)
      .useXpath()
      .click('//*[@class="navbar"]//*[text()="API Reference"]')      
      .useCss()
      .waitForElementVisible('body', 2000)
      .useXpath()      
      .click("//a[@href='/api/expect/']")
      // .pause(2000)      
      .click("//a[@href='#expect-elements-count']")
      .useCss()
      .assert.containsText('body', ".elements().count")
      .saveScreenshot(`${conf.imgpath(browser)}elementscount.png`)
      .end();
  },
};
