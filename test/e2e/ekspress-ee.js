const config = require("../../nightwatch.conf.js");

module.exports = {
  "Ekspress": function(browser) {
    browser
    .url("https://ekspress.delfi.ee/")
    .waitForElementVisible('body', 3000)
    .useXpath()
    .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
    .click("//*[@id='header']/div[1]/ul/li[3]/a")
    .useCss()
    .pause("2000")
    .useXpath()
    .click("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a")
    .useCss()
    .pause("2000")
    .useXpath()
    .click("//*[@id='main']/section/div[1]/div[1]/ul/li[5]/a")
    .useCss()
    .pause("2000")
    .useXpath()
    .waitForElementVisible("//*[@id='main']/section/div[2]/div[1]/div/div[1]/div/a/figure/div/img")
    .click("//*[@id='main']/section/div[2]/div[1]/div/div[1]/div/div/a[2]")
    .useCss()
    .pause("2000")
    .useXpath()
    .isVisible("//*[@id='article-84934355']/div[1]/div/div/div[1]/div[1]/div[3]/div/div[2]/ul/li[3]/a")
    .moveToElement("//*[@id='article-84934355']/div[2]/div/div[1]/div/div[1]/div[1]/div/h1/a[1]", 0, 0)
    .saveScreenshot(`${config.imgpath(browser)}seotud-lood.png`)
    .pause("1000")
    .click("//*[@id='article-84934355']/div[2]/div/div[1]/div/div[1]/div[1]/div/h1/a[1]")
    .pause("2000")
    .isVisible("//*[@id='article-89543073']/div[1]/div[1]/div[3]/div/div[2]/ul/li[3]/a")
    .pause("2000")
    .assert.elementPresent("//*[@id='article-89543073']/div[1]/div[1]/div[3]/div/div[1]/div/a/div[1]", "Autor")
    .saveScreenshot(`${config.imgpath(browser)}artikkel.png`)
    
  }
}


/* * Open "https://ekspress.delfi.ee/"
 * open "Areen" -> "Kirjandus"
 * move to 3'rd page 
 * open last article from listing
 * Check that article has "kuula" button
 * Scroll to "Seotud lood" section
 * Take screenshot
 * Open 1'st article
 * Check that article has "kuula" button
 * Check that article has author
 * Take screenshot  */