// const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for ekspress.delfi.ee": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 6000)
      .useXpath()
      .click("//a[@href='areen']")
      .click("//a[@href='/teema/kirjandus']")
      .useCss()
      .waitForElementVisible("body", 6000)
      .click("a.pager__button--next")
      .waitForElementVisible("div.pager-container", 6000)
      .useXpath()
      .click('//a[@href="?page=3"]')
      .useCss()
      .waitForElementVisible("body", 6000)
      .click('div.headlines--horizontal:last-child a')
      .pause(6000);
  },
};
