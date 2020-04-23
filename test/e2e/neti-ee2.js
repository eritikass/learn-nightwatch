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
      .useXpath()
      .resizeWindow(1200, 800)
      .url("https://www.neti.ee/")
      .waitForElementVisible("html/body", 2000)
      .setValue('//input[@type="text"]', "kass")
      .click('//input[@type="submit"]')
      .waitForElementVisible("html/body", 500)
      .assert.visible('//a[@href="/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/"]/span[text()="Koduloomad"]')
      .click('//a[@href="/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/"]/span[text()="Koduloomad"]')
      .waitForElementVisible("html/body", 500)
      .click("//a[text()='Eestimaa Loomakaitse Liit']")
      .waitForElementVisible("html/body", 500)
      .expect.url().to.contain("loomakaitse.eu");
    browser.saveScreenshot(`${config.imgpath(browser)}loomakaitse.png`)
      .end();
  },
};
