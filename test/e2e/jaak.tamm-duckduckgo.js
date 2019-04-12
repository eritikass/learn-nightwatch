const config = require('../../nightwatch.conf.js');

module.exports = { 
  'DuckDuckGo search cat': function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .pause(1000)

      .setValue('#search_form_input_homepage', 'cat')
      .click('#search_button_homepage')
      .saveScreenshot(`${config.imgpath(browser)}FirstCat.png`)

      .assert.title('cat at DuckDuckGo')

      .assert.containsText('body', 'cats')

      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .saveScreenshot(`${config.imgpath(browser)}SecondCat.png`)

      .click('div.tile.tile--img.has-detail')
      .saveScreenshot(`${config.imgpath(browser)}Third.png`)

      .pause(1000)

      .end();      
  },
};