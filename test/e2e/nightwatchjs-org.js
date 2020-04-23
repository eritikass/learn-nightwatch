const config = require("../../nightwatch.conf.js");

module.exports = {
/*
 * Open "https://nightwatchjs.org/"
 * Click "API Reference"
 * Open "Expect" -> "count"
 * Check count title is ".elements().count"
 * take screenshot
*/
  "Nightwatchjs -> API Reference -> Expect -> count -> Check count title": function (browser) {
    browser
      .useXpath()
      .resizeWindow(1200, 800)
      .url("https://nightwatchjs.org")
      .waitForElementVisible("html/body", 2000)
      .click("(//a[text()='API Reference'])[2]")
      .waitForElementVisible("//a[text()='Expect']", 500)
      .click("//a[text()='Expect']")
      .waitForElementVisible("html/body", 500)
      .click("//a[text()='count']") // ".elements().count" is on same page but not in view without click
      .assert.attributeEquals("//h3[@id='expect-elements-count']", "textContent", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}nightwatchjs.png`)
      .end();
  },
};
