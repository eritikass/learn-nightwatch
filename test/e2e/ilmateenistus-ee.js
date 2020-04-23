const config = require("../../nightwatch.conf.js");

module.exports = {
/*
 * Open "http://www.ilmateenistus.ee/"
 * Click "Ilmaprognoos"
 * Take screenshot
 * Click "Asukohapõhine prognoos"
 * Find "Pärnu linn" with the search box
 * Check that heading is "Pärnu linn, Pärnu linn, Pärnu maakond"
 * Take screenshot
*/
  "Ilmateenistus -> check 4 day weather -> Pärnu": function (browser) {
    browser
      .useXpath()
      .resizeWindow(1200, 800)
      .url("http://www.ilmateenistus.ee/")
      .waitForElementVisible("html/body", 2000)
      .click('//a[text()="Ilmaprognoos"]')
      .waitForElementVisible("html/body", 500)
      .saveScreenshot(`${config.imgpath(browser)}ilmateenistus1.png`)
      .click("(//a[text()='Asukohapõhine prognoos'])[2]")
      .waitForElementVisible("html/body", 500)
      .setValue("(//input[@type='text'])[2]", "Pärnu linn")
      .keys(browser.Keys.ENTER)
      .waitForElementVisible("html/body", 500)
      .useCss()
      .assert.attributeEquals("#graph-container> div > svg > text.highcharts-title > tspan", "textContent", "Pärnu linn, Pärnu linn, Pärnu maakond")
      .pause(1000) // Wait for graph to finish rendering
      .saveScreenshot(`${config.imgpath(browser)}ilmateenistus2.png`)
      .end();
  },
};
