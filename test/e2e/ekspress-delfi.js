const config = require("../../nightwatch.conf.js");

module.exports = {
  "Articles in Areen": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 2000)
      .resizeWindow(1400, 1000)
      .useXpath()
      .click('//a[@href="areen"]')
      .useCss()
      .pause(2000)
      .click('li.header__navigation-bottom__item:nth-child(3)')   
      .pause(2000)
      .waitForElementVisible("body", 2000)
      .click('li.menu-list__item:nth-child(5)')      
      .waitForElementVisible("body", 2000)
      .pause(2000)
      .useXpath()
      .click('//a[@href="?page=3"]')
      .useCss()
      .pause(2000)
      .useXpath()
      .moveToElement('(//div[@class="headline"])[last()]', 0, 0) 
      .pause(2000)    
      .useXpath()
      .click('(//div[@class="headline"])[last()]')
      .useCss()
      .pause(2000)
      .expect.element(".article__listen").to.be.present;
    browser.expect.element(".author").to.be.present;
    browser.saveScreenshot(`${config.imgpath(browser)}ekspress-delfi-art.png`)
      .end();
  },
};
