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
      .waitForElementVisible("body", 3000)
      .assert.containsText("body", "Kasside keele (teaduslik) õpik kassiomanikele")
      .useXpath()
      .click("//a[@href='/areen/kasside-keele-teaduslik-opik-kassiomanikele?id=82101687']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("#article-82101687", "KUULA", '1st article has "Kuula" button')
      .useXpath()
      .moveToElement("//*[@id='article-82101687']/div[1]/div/div/div[1]/div[2]/div[3]", 10, 10)
      .assert.visible("//*[@id='article-82101687']/div[1]/div/div/div[1]/div[2]/div[3]")
      .useCss()
      .pause(4000)
      .useXpath()
      .saveScreenshot(`${config.imgpath(browser)}ekspress-delfi-seotudlood.png`)
      .click('//*[@id="article-82101687"]/div[1]/div/div/div[1]/div[2]/div[3]/div[4]/div/div/div[2]/div[1]/article/a')
      .useCss()
      .waitForElementVisible("body", 4000)
      .pause(6000)
      .assert.containsText("#article-80187142", "KUULA", '2nd article has "Kuula" button')
      // .expect.element(".article__listen").to.be.present;
      .expect.element(".author").to.be.present;
    browser.saveScreenshot(`${config.imgpath(browser)}ekspress-delfi-art.png`)
      .end();
  },
};
