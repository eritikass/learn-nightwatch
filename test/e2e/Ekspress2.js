const config = require('../../nightwatch.conf.js');

module.exports = {
  'Ekspress ->Kirjandus': function Ekspress(browser) {
    browser
    .setWindowSize(1200, 1200)// define new window size
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible("body")//- siin on css
      .useXpath()
      .click("//a[@href='areen']")//click Areen
      .waitForElementVisible('//*[@class="header__navigation-bottom__link"][text()="Kirjandus"]')
      .click('//*[@class="header__navigation-bottom__link"][text()="Kirjandus"]')//click Kirjandus
      .waitForElementVisible("//body");//-siin on xpath mitte css
    // move to 2nd page
    browser
      .waitForElementVisible('//div[contains(@class,"pager-container--theme-paper")][1]//a[text()="›"]')
      .click('//div[contains(@class,"pager-container--theme-paper")][1]//a[text()="›"]')// click next
      .waitForElementVisible('//div[contains(@class,"pager-container--theme-paper")][1]//a[contains(text(),"3")]')
      .assert.urlContains("teema/kirjandus?page=2");
    // move to 3rd page
    browser  
    .waitForElementVisible('//div[contains(@class,"pager-container--theme-paper")][1]//a[text()="›"]')
    .click('//div[contains(@class,"pager-container--theme-paper")][1]//a[text()="›"]')// click next
    .waitForElementVisible('//div[contains(@class,"pager-container--theme-paper")][1]//a[contains(text(),"4")]')
    .assert.urlContains("teema/kirjandus?page=3");
   
    //move to the end of articles list
    browser
      .waitForElementVisible("(//span[text()='Loe edasi'])[last()]")
      .moveToElement('(//div[@class="headline"])[last()]', 0, 0)// find last arrticle
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}ekspress-last3.png`);
    
    // click to last article
    browser
      .click("(//span[text()='Loe edasi'])[last()]")
      //.waitForElementVisible('//a[@class="article_listen"]')
      .useCss()
      .assert.visible('button[type=submit]', 'Kuula') // check the button "Kuula"
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}ekspress-kuula.png`)
      .pause (3000)
      .end()
  },
};
