const config = require('../../nightwatch.conf.js');

module.exports = {
  'Rate->mailbox': function RateMailbox(browser) {
    browser
      .url('https://www.rate.ee/login')
      .waitForElementVisible('body', 2000) // css
      .click('a.icn-messages')
    // .assert.containsText("body","a.icn-messages") // css
      .waitForElementVisible('body', 2000) // css
      .assert.containsText('body', 'Seda lehte näevad ainult registreeritud kasutajad.') // css
      .saveScreenshot(`${config.imgpath(browser)}rate-ee.png`)
      .end();
  },

};
