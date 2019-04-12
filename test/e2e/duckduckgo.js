const config = require('../../nightwatch.conf.js');

module.exports = {
  'DuckDuckGo Cat search': function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .pause(1000)
      .assert.title('DuckDuckGo — Privacy, simplified.')
      .setValue('input[name=q]', 'cat')
      .pause(1000)
      .click('#search_button_homepage')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}cat1.png`)
      .pause(1000)
      .assert.containsText('body', 'cats')
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .saveScreenshot(`${config.imgpath(browser)}catimages.png`)
      .pause(1000)
      .click('div.tile.tile--img.has-detail')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}catfirstimage.png`)
      .end();
  }}