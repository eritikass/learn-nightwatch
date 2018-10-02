const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['kertmoorbach'],
  'Open kertmoorbach': function (browser) {
    // load google
    browser
      .resizeWindow(1920, 1080)
      .url('http://www.kertmoorbach.com')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}kertmoorbach.png`)
      .pause(1000)
      .click('li[class="page_item page-item-8"]')
      .pause(500)
      .click('li[class="page_item page-item-11"]')
      .pause(500)
      .click('li[class="page_item page-item-98"]')
      .pause(500)
      .click('li[class="page_item page-item-194"]')
      .pause(500)
      .click('li[class="page_item page-item-89"]')
      .pause(500)
      .click('li[class="page_item page-item-200"]')
      .pause(500)
      .click('li[class="page_item page-item-94"]')
      .pause(500)
      .click('li[class="page_item page-item-12"]')
      .pause(500)
      .click('li[class="page_item page-item-153"]')
      .pause(500)
      .click('li[class="page_item page-item-84"]')
      .pause(500)
      .click('li[class="page_item page-item-142"]')
      .pause(500)
      .click('li[class="page_item page-item-115"]')
      .pause(500)
      .click('li[class="page_item page-item-10"]')
      .pause(500)
      .click('li[class="page_item page-item-115"]')
      .pause(500)
      .setValue('#pwbox-115', ['Passw0rd', browser.Keys.ENTER])
      .pause(1000)
      .click('li[class="page_item page-item-89"]')
      .pause(10000)
      browser.Keys.SPACE
      .end();

      

  },
};