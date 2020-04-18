const config = require("../../nightwatch.conf.js");

module.exports = {
  "Delfi.ee -> Koroona test": function (browser) {
    browser
      .url("https://www.delfi.ee/")
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Koroonaviirus")
      .saveScreenshot(`${config.imgpath(browser)}delfi.png`)
      .end();
  },
  "Delfi.ee -> Vihje": function (browser) {
    browser
      .url("https://www.delfi.ee/")
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click("//*[@class='header-top-right__link header-top-right__link--send']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText("body", "Saada meile vihje, foto või video!")
      .useXpath()
      .click("//*[@class='sah-form__text']")
      .setValue("//*[@class='sah-form__text']", "Inimesed jooksevad tormi näomaskidele, järjekorrad on meeletud Tõnismäe valveapteegis!!!")
      .click("//*[@class='sah-data__input']")
      .useCss()
      .setValue('input[name=name]', 'Anonüümne')
      .setValue('input[name=phonemail]', 'anon@web.com')
      .useXpath()
      .click("//*[@class='checkbox']")
      .pause(10000)
      .click("//*[@class='hint-form__button hint-form__submit']")
      .useCss()
      .waitForElementVisible("body", 3000)
      .assert.containsText("body", "Aitäh")
      .pause(10000)
      .end();
  },

};
