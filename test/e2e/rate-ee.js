const config = require("../../nightwatch.conf.js");
  
module.exports = {
  "Test for rate": function (browser) {
    browser
      .url("https://rate.ee/")
      .waitForElementVisible("body", 2000) // css
      //.assert.containsText("button", "Facebook.login()") ?nupu otsimine ei õnnestunud
      //.useXpath()
      //.click("//a[@href='https://rate.ee/mailbox']") // xpath
      //.useCss()
      .click('a.icn-messages')
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.") // css
      .saveScreenshot(`${config.imgpath(browser)}rate-ee.png`)
      .end();
    }
}