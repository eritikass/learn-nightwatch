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
      .saveScreenshot(`${config.imgpath(browser)}EkspressCase1.png`)
      .end();
  },
  'Ekspress, case 2': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .setValue('input[class="header-search__input"]', "kits")
      .click('button[class="header-search__button icon icon--search"')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}Ekspresssearch.png`)
      .pause(1000)
      .end();
  },
};