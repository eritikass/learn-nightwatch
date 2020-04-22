const config = require('../../nightwatch.conf.js');

module.exports = {
  'Ekspress ->Kirjandus': function Ekspress(browser) {
    browser
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible("body", 100)
      .resizeWindow(1000,800) // define new window size
      .useXpath()
      .click("//a[@href='areen']")
      .useXpath()
      .click('//*[@class="header__navigation-bottom__link"][text()="Kirjandus"]')
      .useCss()
      .waitForElementVisible("body", 100)
      .useXpath()
      .click('//div[contains(@class,"pager-container--theme-paper")][1]//a[text()="›"]')// click to next
      .pause (500)
      .click('//div[contains(@class,"pager-container--theme-paper")][1]//a[contains(text(),"3")]')//click to 3 page
      .useCss()
      .waitForElementVisible("body", 100)
      .useXpath() 
      .moveToElement('(//div[@class="headline"])[last()]', 0, 0)//find last arrticle
      .pause(2000)
      .click('(//div[@class="headline"])[last()]')
      .useCss()
      .waitForElementVisible("body", 5000)
      .saveScreenshot(`${config.imgpath(browser)}ekspress-last.png`)
      .assert.visible('button[type=submit]', 'Kuula') // check the button "Kuula"
      .waitForElementVisible("body", 5000)
      .saveScreenshot(`${config.imgpath(browser)}ekspress-kuula.png`)
      .end();
    },
  };