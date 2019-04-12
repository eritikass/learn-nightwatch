const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  
  'DuckDuckGo search cat': function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .pause(1000)
      .assert.title('DuckDuckGo — Privacy, simplified.')
      .setValue('input[name=q]', 'cat')
      .pause(1000)
      .click('#search_button_homepage')
      .saveScreenshot(`${config.imgpath(browser)}duckpeabolemakiisu1.png`)
      .assert.containsText('body', 'cats')
      .saveScreenshot(`${config.imgpath(browser)}duckpeabolemakiisu2.png`)
      .pause(1000)
      .click('a[data-zci-link="images"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duckpeabolemakiisu3.png`)
      .pause(1000)
      .click('.tile--img__img.js-lazyload')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}duckpeabolemakiisu4.png`)
      .end();
  },
};
