const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['auto24'],
  'Open auto24': function (browser) {
    browser
      .url('http://www.auto24.ee/main/mainindex.php')
      .pause(100)
      .waitForElementVisible('body')
      .pause(100)
      .click('a[class="menu-item makes first multirow"]')
      .saveScreenshot(`${config.imgpath(browser)}auto24.png`)
      .pause(1000)
      .end();
  }
};
