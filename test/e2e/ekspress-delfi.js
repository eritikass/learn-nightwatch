const config = require("../../nightwatch.conf.js");

module.exports = {
  "Artiklid Areenis": function (browser) {
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
      .click("//*[@id='main']/section/div[12]/a")  // lk nool
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click('//a[@href=\"?page=3\"]') // lk 3
      
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Kasside keele (teaduslik) õpik kassiomanikele") // css
      .useXpath()
      //.click("//*[contains(text(), 'Kasside keele')]")
      .click("//a[@href='/areen/kasside-keele-teaduslik-opik-kassiomanikele?id=82101687']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .expect.element("i.icon").to.be.present;
      //a.article__listen) // css
      //.saveScreenshot(`${config.imgpath(browser)}ekspress-delfi.png`)
      // browser
      //.assert.containsText("body", "Eestimaa Loomakaitse Liit") // css
      //.useXpath()
      //.click("//*[contains(text(), 'Loomakaitse')]")
      //.useCss()
      //.assert.urlContains('loomakaitse.eu') // css */
      //.saveScreenshot(`${config.imgpath(browser)}ekspress-delfi.png`)
      //.end();
  },


  //Open "https://ekspress.delfi.ee/"
  //open "Areen" -> "Kirjandus"
  //move to 3'rd page
  //open last article from listing
  //Check that article has "kuula" button
  //Scroll to "Loe veel" section
  //Take screenshot
  //Open 1'st article
  //Check that article has "kuula" button
 // Check that article has author
  //Take screenshot
};
