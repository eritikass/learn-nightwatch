const config = require("../../nightwatch.conf.js");

module.exports = {
  "Rate.ee -> Meilikasti test": function (browser) {
    browser
      .url("https://www.rate.ee/")
      .waitForElementVisible("body", 2000) // css
      .useXpath()
      .click("//a[@href='https://rate.ee/mailbox']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad")
      .saveScreenshot(`${config.imgpath(browser)}rate.png`)
      .end();
  },

};
