const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['ekspress'],
  'Ekspress, case 1': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .click('a[class="headline__media"')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}Ekspressfrontpage.png`)
      .waitForElementVisible('body')
      .pause(1000)
      .mouseButtonClick(0)
      .saveScreenshot(`${config.imgpath(browser)}EkspressCase1.png`)
      .end();
  }
};