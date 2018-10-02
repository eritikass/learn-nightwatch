const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['mangukoobas'],
  'manguoobas': function (browser) {
    // load mangukoobas
    browser
      .url('http://mangukoobas.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}mangukoobas1.png`)
      .pause(1000)
      .click('a[href="/id/5/action/themes/channel/1/"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}mangukoobas2.png`)
      .pause(1000)
      .end();
  },
};
