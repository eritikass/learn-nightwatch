const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'DuckDuckGO': function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .pause(2000)

      .saveScreenshot(`${config.imgpath(browser)}duckduckgo.png`)
      .pause(2000)
      .setValue('#search_form_input_homepage', 'Cat') 
      .pause(2000)
      .click('#search_button_homepage') 
      .pause(7000)
      .assert.containsText('body','')
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .pause(2000)
      .assert.title('Cat at DuckDuckGo')
      .click('div.tile.tile--img.has-detail')
      .pause(7000)

      .saveScreenshot(`${config.imgpath(browser)}duckduckgo2.png`)
      .assert.containsText('body','Cats')
      .end();
  },
};
