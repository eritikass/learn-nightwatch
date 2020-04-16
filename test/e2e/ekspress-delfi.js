const config = require("../../nightwatch.conf.js");

module.exports = {
  "Articles in Areen": function (browser) {
    browser
      .url("https://ekspress.delfi.ee/")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click('//*[@id="header"]/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a') // areen
      .useCss()
      .useXpath()
      .click('//*[@id="header"]/div[1]/ul/li[3]/a') // kirjandus
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='main']/section/div[12]/a") // pager arrow
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click('//a[@href="?page=3"]') // p 3
      .useCss()
      .pause(3000)
      .assert.containsText("body", "Härrasmees Moskvas ehk reaalsusesse viiv fantaasia")
      .useXpath()
      .click("//a[@href='/areen/harrasmees-moskvas-ehk-reaalsusesse-viiv-fantaasia?id=82166949']")
      .useCss()
      .pause(3000)
      .assert.containsText("#article-82166949", "KUULA", 'This article has "Kuula" button')
      // .useXpath()
      // .moveToElement("//*[@id='article-82166949']/div[1]/div/div/div[1]/div[2]/div[3]", 10, 10)
      // .moveToElement('div:data-v-3b749958', 10, 10)
      // .pause(5000)
      // .assert.visible("//*[@id='article-82166949']/div[1]/div/div/div[1]/div[2]/div[3]")
      // .useCss()
      // .pause(5000)
      // .useXpath()
      // .saveScreenshot(`${config.imgpath(browser)}ekspress-delfi-seotudlood.png`)
      // .click()
      // .useCss()
      // .pause(6000)
      // .assert.containsText("#article-80187142", "KUULA", '2nd article has "Kuula" button')
      // .expect.element(".article__listen").to.be.present;
      .expect.element(".author").to.be.present;
    browser.saveScreenshot(`${config.imgpath(browser)}ekspress-delfi-art.png`)
      .end();
  },
};
