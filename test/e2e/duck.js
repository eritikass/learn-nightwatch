const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  'DuckDuckGo — Privacy, simplified.': function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}duck1.png`)
      .pause (2000)
      .setValue('input[name=q]','cat')
      .saveScreenshot(`${config.imgpath(browser)}duck2.png`)
      .pause(2000)
      .click("#search_button_homepage")
      .pause (2000)
      .saveScreenshot(`${config.imgpath(browser)}duck3.png`)
      .assert.title('cat at DuckDuckGo')
      .pause (2000)
      .assert.containsText('div[class="results--main"]', 'cats')
      .pause (2000)
      .saveScreenshot(`${config.imgpath(browser)}duck4.png`)
      .pause(2000)
      .click("a.zcm__link.js-zci-link.js-zci-link--images")
      .pause(2000)
      .click(".tile--img__details")
      .pause(2000)
      .end();
  },
};
