const config = require("../../nightwatch.conf.js");
module.exports = {
  tags: [ 'rate' ],
  "Test for rate.ee": function (browser) {
    browser
      .url("https://www.rate.ee/")
      .waitForElementVisible("body")
      .useXpath()
        .click("//a[@href='https://rate.ee/mailbox']")
      .useCss()
        .waitForElementVisible("body")
        .assert.containsText('body', 'Seda lehte näevad ainult registreeritud kasutajad.')
      .end()
  }
}        