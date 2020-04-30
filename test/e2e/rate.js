const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for rate": function (browser) {
    browser
      .url("https://rate.ee/")
      .waitForElementVisible("body", 2000) // css
      .click('a.icn-messages')
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.") // css
      .saveScreenshot(`${config.imgpath(browser)}rate.png`)
      .end();
  },
};
