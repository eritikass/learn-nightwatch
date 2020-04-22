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
      .click("//*[@id='navbar']/ul/li[4]/a[text()='API Reference']")
      .waitForElementVisible("html/body", 500)
      .click("//a[text()='Expect']")
      .waitForElementVisible("html/body", 500)
      .click("//a[text()='count']")
      .assert.attributeEquals("//*[@id='expect-elements-count']", "textContent", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}nightwatchjs.png`)
      .end();
  },
};
