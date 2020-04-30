const config = require("../../nightwatch.conf.js");

module.exports = {
  "Err majandusartikli lugemine": function(browser) {
    browser
    .url("https://www.err.ee/")
    .waitForElementVisible('body', 3000)
    .useCss()
    .useXpath()
    .click('//*[@id="ng-app"]/body/div[1]/header/div[2]/section/nav[1]/div[2]/div[3]/a')
    .pause("2000")
    .click('//*[@id="ng-app"]/body/div[1]/div[2]/div/div[1]/div[2]/p/a')
    .pause("2000")
    .assert.elementPresent("//*[@id='ng-app']/body/div[1]/div[2]/div/div[1]/div[1]/div/article/div/div[1]/div[1]/section/time", "Kellaaeg")
    .assert.elementPresent("//*[@id='ng-app']/body/div[1]/div[2]/div/div[1]/div[1]/div/article/div/div[1]/figure/picture/img", "Pilt")
    .saveScreenshot(`${config.imgpath(browser)}majandusartikkel.png`)
    .end()
  }
}

// Mine err kodulehele
// Kliki majanduse peale
// kliki viimase artikli peale
// Kontrolli kas pilt on olemas
// Kontrolli kas kellaaeg on olemas
// Tee screenshot artikli leheüljest