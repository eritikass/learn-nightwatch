const conf = require("../../nightwatch.conf.js");

module.exports = {
  "EE-delfi-last-article": function (browser) {
    browser
      .setWindowSize(1300, 1100)
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body")
      .pause(3000)
      .useXpath()
      .click('//li[@class="navigation-top__item navigation-top__item--areen"]/a[text()="Areen"]')
      .waitForElementVisible('//li[@class="header__navigation-bottom__item"]/a[text()="Kirjandus"]')
      .pause(3000)
      .click('//li[@class="header__navigation-bottom__item"]/a[text()="Kirjandus"]')
      .waitForElementVisible("//body")
      .pause(3000)

      .saveScreenshot(`${conf.imgpath(browser)}EE-AAA-ekspress-article-page-1.png`)

      //move to 3rd page
      .waitForElementVisible('(//div[@class="pager-wrapper"]//*[text()="»"])[1]')
      .pause(4000)
      .click('(//div[@class="pager-wrapper"]//*[text()="»"])[1]')
      .pause(5000) //XXXX sohk
      .assert.urlContains('teema/kirjandus?page=3')
      .saveScreenshot(`${conf.imgpath(browser)}EE-AAA-ekspress-article-page-3.png`)

      //last article and open it
      .click('(//div[@class="headline"])[last()]')
      .pause(3000)
      .waitForElementVisible('//a[@class="article__listen"]')
      .pause(3000)
      .assert.containsText('//a[@class="article__listen"]', "KUULA")
      
      .saveScreenshot(`${conf.imgpath(browser)}EE-AAA-ekspress-article-page-3-last.png`)
      .pause(3000)
      .end();
    },
};