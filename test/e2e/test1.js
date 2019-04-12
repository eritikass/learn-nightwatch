const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'DuckDucGo search cat': function (browser) {
    browser
      .url('http://duckduckgo.com')
      .waitForElementVisible('body')
      .pause(3000)
      .setValue('.js-search-input.search__input--adv', 'cat')
      .saveScreenshot(`${config.imgpath(browser)}duck1.png`)
      .pause(3000)
      .click('#search_button_homepage')
      .pause(3000)
      .assert.title('cat at DuckDuckGo')
      .assert.containsText('body', 'cat')
      .click('.zcm__link.js-zci-link.js-zci-link--images')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}duck2.png`)
      .click('.tile--img__img.js-lazyload')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}duck3.png`)
    .end();
  },
};