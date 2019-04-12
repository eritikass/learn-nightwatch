const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Google cat search': function (browser) {
    browser
      .url('https://duckduckgo.com')
      .waitForElementVisible('body')
      .pause(5000)
      .setValue('input[name=q]', 'cat')
      .pause(2000)
      .click('input[id=search_button_homepage]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duck1.png`)
      .assert.title('cat at DuckDuckGo')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duck2.png`)
      .assert.containsText('body', 'cats')
      .saveScreenshot(`${config.imgpath(browser)}duck3.png`)
      .pause(1000)
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}duck4.png`)
      .pause(2000)
      .click('.tile--img__img.js-lazyload')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duck5.png`)
      .end();
    },
};
