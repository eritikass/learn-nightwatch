const config = require("../../nightwatch.conf.js");
module.exports = {
  tags: [ 'rate' ],
  "Test for rate.ee": function (browser) {
    browser
      .url("https://www.rate.ee/")
      .waitForElementVisible("body", 2000)
      .useXpath()
        .click("//a[@href='https://rate.ee/mailbox']")
      .useCss()
        .waitForElementVisible("body", 500)
        .assert.containsText('body', 'Seda lehte näevad ainult registreeritud kasutajad.')
      .end()
  }
}        