const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['soov'],
  'Open soov': function (browser) {
    // load google
    browser
      .url('https://soov-ee.postimees.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .click('a[href="https://soov-ee.postimees.ee/577-soiduautod/listings.html"]')

      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}soov.png`)
      .pause(1000)
      .end();



  },
};