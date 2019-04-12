const config = require('../../nightwatch.conf.js');

module.exports = {
  'Duckduckgo search cat': function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}DuckDuckGo1.png`)
      .pause(2000)
      .setValue('input[name=q]', 'cat')
      .saveScreenshot(`${config.imgpath(browser)}DuckDuckGo2.png`)
      .pause(2000)
      .click('#search_button_homepage')
      .saveScreenshot(`${config.imgpath(browser)}DuckDuckGo3.png`)
      .pause(2000)
      .assert.title('cat at DuckDuckGo')
      .saveScreenshot(`${config.imgpath(browser)}DuckDuckGo4.png`)
      .pause(2000)
      .assert.containsText('body', 'cat')
      .saveScreenshot(`${config.imgpath(browser)}DuckDuckGo4.png`)
      .pause(2000)
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .saveScreenshot(`${config.imgpath(browser)}DuckDuckGo5.png`)
      .pause(2000)
      .click('.tile--img__img.js-lazyload')
      .saveScreenshot(`${config.imgpath(browser)}DuckDuckGo6.png`)
      .end();
  },
};