const config = require("../../nightwatch.conf.js");

module.exports = {
/*
 * Open https://www.neti.ee/
 * Search "kass"
 * Check that page contains link to "Koduloomad"
 * Open "Koduloomad"
 * Open "Eestimaa Loomakaitse Liit"
 * Check url contains "loomakaitse.eu"
 * Take screenshot
*/
  "Kass -> Koduloomad -> Eestimaa Loomakaitse Liit -> loomakaitse.eu": function (browser) {
    browser
      .resizeWindow(1200, 800)
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .setValue("input.input.NETIMenu", "kass")
      .click('input[class="button sprite"]')
      .waitForElementVisible("body", 500)

      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .waitForElementVisible("html/body", 500)
      .click("//a[@href='http://loomakaitse.eu/']")
      .waitForElementVisible("html/body", 500)
      .expect.url().to.contain("loomakaitse.eu");
    browser.saveScreenshot(`${config.imgpath(browser)}loomakaitse.png`)
      .end();
  },
};
