// const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for rate.ee": function (browser) {
    browser
      .url("https://www.rate.ee/login")
      .waitForElementVisible("body", 1000)
      .assert.containsText("button", "Logi sisse")
      .click("a.icn-messages")
      .waitForElementVisible("body", 1000)
      .assert.containsText(".alert-warning", "Seda lehte näevad ainult registreeritud kasutajad.")
      .end();
  },
};
