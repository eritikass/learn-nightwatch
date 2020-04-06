const config = require("../../nightwatch.conf.js");

module.exports = {
  "Rate -> Kirjakast Error": function (browser) {
    browser
      .url("https://rate.ee/login")
      .waitForElementVisible("body", 2000)
      .click('a.icn-messages')
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.")
      .saveScreenshot(`${config.imgpath(browser)}rate.png`)
      .end();
  },
};