const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['kertmoorbach'],
  'Open Eesti ekspress': function (browser) {
    // load google
    browser
      .resizeWindow(1920, 1080)
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}frontpage.png`)
      .click('a[href= "/kuum/veerpalu-voimalik-kaitsja-voitis-eelmisel-aastal-uliraske-kohtuasja?id=85567893"][class="headline__media"]')
      .waitForElementVisible('body')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}artikel.png`)
      .moveToElement('a[href="#"][class="article__comments"]',10,10)
      .pause(2000)
      .end();

      

  },
};