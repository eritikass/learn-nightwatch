const config = require("../../nightwatch.conf.js");

module.exports = {
  "Artiklid Areenis": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[contains(text(), 'reen')]")
      /* .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad") // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Eestimaa Loomakaitse Liit") // css
      .useXpath()
      .click("//*[contains(text(), 'Loomakaitse')]")
      .useCss()
      .assert.urlContains('loomakaitse.eu') // css
      .saveScreenshot(`${config.imgpath(browser)}ekspress-delfi.png`) */
      .end();
  },


  //Open "https://ekspress.delfi.ee/"
  //open "Areen" -> "Kirjandus"
  //move to 3'rd page
  //open last article from listing
  //Check that article has "kuula" button
  //Scroll to "Loe veel" section
  //Take screenshot
  //Open 1'st article
  //Check that article has "kuula" button
 // Check that article has author
  //Take screenshot
};
