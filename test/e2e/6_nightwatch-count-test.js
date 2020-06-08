const conf = require('../../nightwatch.conf.js');

module.exports = {
  "Nightwatch-APIref-elements-count": function (browser) {
    browser
      .url("https://www.nightwatchjs.org/")
      .waitForElementVisible('body')
      .pause(3000)
      .resizeWindow(1400, 1000)
      .pause(3000)
      .useXpath()
      .click('//*[@class="navbar"]//*[text()="API Reference"]')
      .pause(3000)
      .useCss()
      .waitForElementVisible('body')
      .pause(3000)
      .useXpath()
      .click("//a[@href='/api/expect/']")
      .pause(3000)
      .click("//a[@href='#expect-elements-count']")
      .pause(8000)
      .assert.containsText("//*[@id='expect-elements-count']", ".elements().count")
      .pause(5000)
      .useCss()
      .assert.containsText('body', ".elements().count")
      .pause(8000)
      .saveScreenshot(`${conf.imgpath(browser)}elementscount.png`)
      .end();
  },
};
