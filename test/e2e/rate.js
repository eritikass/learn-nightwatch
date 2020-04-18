// const config = require('../../nightwatch.conf.js');

module.exports = {
  'Test for rate': function (browser) {
    browser
      .url('https://www.rate.ee/')
      .waitForElementVisible("body")
      .useXpath().click("//a[@href='https://rate.ee/mailbox']")
      .useCss()
      .waitForElementVisible("body")
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.")
      .end();
  },
//   'Second for rate': function (browser) {
//     browser
//       .url('https://www.rate.ee/')
//       .waitForElementVisible("body")
//       .browser.expect.element("#login-form > div.mt-4 > button").to.be.present
//       .useXpath().click("//a[@href='https://rate.ee/mailbox']")
//       .useCss()
//       .end();
//   },
};
