const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['Delfi Ekspress'],
  'Open delfi ekspress': function (browser) {
    // open delfi ekspress
    browser
      .resizeWindow(1280,800)
      .url('https://ekspress.delfi.ee')
      .waitForElementVisible('body')
      .pause(2000)
    .saveScreenshot(`${config.imgpath(browser)}frontPage.png`)
      .click('a[href="https://www.lehed.ee/products/ekspress?utm_source=EE_uusveeb&utm_medium=Tellinupp"][class="mobile-hide button--order-digi"]')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}telli.png`)
      .moveToElement('a[href="#"][class="add-to-cart btn btn-with-icon black-border-button semibold"]',10,10)
      .waitForElementVisible('a[href="#"][class="add-to-cart btn btn-with-icon black-border-button semibold"]')
      .pause(1000)
      .click('a[href="#"][class="add-to-cart btn btn-with-icon black-border-button semibold"]')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}ostukorv.png`)
      .back()
      .pause(2000)
      .end();
  },
};
