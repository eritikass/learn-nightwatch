const conf = require('../../nightwatch.conf.js');

module.exports = {
  "Postkast login test": function (browser) {
    browser
      .url("https://www.rate.ee/login") // ava url
      .waitForElementVisible("body", 2000) // oota, et leht on laadinud
      .click("a.nav-link.icn-messages.icn") // piisab a.icn-messages
      .waitForElementVisible("body", 2000)
      .assert.containsText('body', "Seda lehte näevad ainult registreeritud kasutajad.")
      .saveScreenshot(`${conf.imgpath(browser)}rate-ee-postkast.png`)
      .end();
    // .click("a.nav-link.icn-messages.icn")
  },
};
