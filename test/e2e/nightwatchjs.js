const config = require('../../nightwatch.conf.js');

module.exports = {
  'Test for nightwatchjs.org': function (browser) {
    browser
      .url('https://www.nightwatchjs.org/')
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}nightwatchjs-org.png`)
      .resizeWindow(1200, 800)
      .saveScreenshot(`${config.imgpath(browser)}nightwatchjs-org.png`)
      .useXpath()
      .click('//div[@id="navbar"]//a[text()="API Reference"]')
      .useCss()
      .waitForElementVisible('body', 1500)
      .saveScreenshot(`${config.imgpath(browser)}nightwatchjs-org.png`);

    browser.pause(2000).end();
  },
};
