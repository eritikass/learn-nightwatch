const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}1.png`)
      .setValue('input[name=q]','cat')
      .saveScreenshot(`${config.imgpath(browser)}2`)
      .click('#search_button_homepage')
      .saveScreenshot(`${config.imgpath(browser)}3`)
      .assert.title('cat at DuckDuckGo')
      .saveScreenshot(`${config.imgpath(browser)}4`)
      .assert.containsText('body','cats')
      .saveScreenshot(`${config.imgpath(browser)}5`)
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .saveScreenshot(`${config.imgpath(browser)}6`)
      .pause(2000)
      .click('.tile--img__img.js-lazyload')
      .saveScreenshot(`${config.imgpath(browser)}7`)
      .end();
  },
};
