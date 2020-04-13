/* const config = require("../../nightwatch.conf.js");

module.exports = { */
  /* * Open https://www.neti.ee/
 * test that page contains text "Riik ja Ühiskond"
 * test that page contains link "Valitsus"
 * take screenshot
 * click link "Valitsus"
 * wait until page page loads
 * test that page contains text "Ametlikud Teadaanded (AT)"
 * take screenshot */
  /* "Riik ja Ühiskond -> Valitsus": function (browser) {
     browser
       .url("https://www.neti.ee/")
       .waitForElementVisible("body", 2000)
       .assert.containsText("body", "Riik ja Ühiskond")
       .useXpath()
       .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus")
       .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
       .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']")
       .useCss()
       .waitForElementVisible("body", 3000)
       .assert.containsText("body", "Ametlikud Teadaanded (AT)")
       .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
       .end();
   }, */
   /* * Open https://www.neti.ee/
 * Search "kass"
 * Check that page contains link to "Koduloomad"
 * Open "Koduloomad"
 * Open "Eestimaa Loomakaitse Liit"
 * Check url contains "loomakaitse.eu"
 * Take screenshot */
   /* "Koduloomad": function (browser) {
     browser
       .url("https://www.neti.ee/")
       .waitForElementVisible("body", 2000)
       .useXpath()
       .click("//*[@class='input NETIMenu']")
       .setValue("//*[@class='input NETIMenu']", "kass")
       .click("//*[@id='search-bar']/div[4]/input")
       .useCss()
       .assert.containsText("body", "Koduloomad")
       .useXpath()
       .click("//*[@id='main-content']/div[1]/ul[1]/li[1]/div/h3/a[2]")
       .useCss()
       .waitForElementVisible("body", 2000)
       .useXpath()
       .click("//*[@id='main-content']/div[1]/ul[1]/li[1]/h3/a")
       .assert.urlContains("loomakaitse.eu")
       .saveScreenshot(`${config.imgpath(browser)}koduloomad.png`)
       .end();
   }
};   */



