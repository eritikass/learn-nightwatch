// eslint-disable-next-line no-unused-vars
const conf = require('../../nightwatch.conf.js');

module.exports = {
  "Postkast login test": function (browser) {
    browser
      .url("https://www.rate.ee/login")
      .waitForElementVisible("body", 2000)
      .click("a.nav-link.icn-messages.icn") // piisab a.icn-messages
      .waitForElementVisible("body", 2000)
      .assert.containsText('body', "Seda lehte näevad ainult registreeritud kasutajad.")
      // .saveScreenshot(`${conf.imgpath(browser)}rate-ee-postkast.png`)
      .end();
  },
};
