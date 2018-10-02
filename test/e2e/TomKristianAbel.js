const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['mySpace'],
  'mySpace': function (browser) {
    browser
      .url('https://myspace.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}mySpace.png`)
      .click('a[href="/articles/everybody-loves-a-list"]')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}mySpace.png`)
      .pause(1000)
      .end();
  },
};