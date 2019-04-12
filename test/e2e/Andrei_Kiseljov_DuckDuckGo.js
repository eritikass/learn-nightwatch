const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'DuckDuckGo search cat': function (browser) {
    browser
      .url('https://duckduckgo.com')
      .waitForElementVisible('body')
      .pause(1000)
      .setValue('input[name=q]', 'cat')
      .pause(1000)
      .click('input[type=submit]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duck1.png`)
      .pause(1000)
      .assert.title('cat at DuckDuckGo')
      .pause(1000)
      .assert.containsText('body', 'cats', '')
      .pause(1000)
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duck2.png`)
      .pause(1000)
      .click('div.tile--img__media')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duck3.png`)
      .end();
  },
};
