const config = require("../../nightwatch.conf.js");

module.exports = {
  "TTC test": function (browser) {
    browser
      .useCss()
      .url("https://tamrieltradecentre.com/")
      .waitForElementVisible("body", 3000) // css
      .useXpath()
      .click("//a[@href='#euTab']")
      .click("//*[@id='euTab']/div/div[1]/button")
      .waitForElementVisible("//a[@href='/pc/Trade/Search']", 2000)
      .useXpath()
      .click("//a[@href='/pc/Trade/Search']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@id='body']/table/tbody/tr[3]/td[2]/section/div/form/div[2]/div[1]/div/select")
      .useCss()
      .click("option[value='PriceCheck']")
      .click("select[name='SearchType'] option[value='PriceCheck']")
      .useXpath()
      .setValue("//*[@id='ItemNamePattern']", "Corn Flower")
      .useCss()
      .click('#open-in-new-tab-checkbox')
      .useXpath()
      .click("//*[@id='body']/table/tbody/tr[3]/td[2]/section/div/form/div[4]/div/div/div[1]/input")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.urlContains("SearchResult")
      .saveScreenshot(`${config.imgpath(browser)}ttc-com.png`)
      .end();
  },
};
