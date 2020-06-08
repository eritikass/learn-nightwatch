const config = require("../../nightwatch.conf.js");


module.exports = {
  "Neti-Valitsus-AT": function (browser) {
    browser
    .url("https://www.neti.ee")
    .pause(3000)
    .waitForElementVisible("body")
    .pause(3000)
    .assert.containsText("body", "Riik ja Ühiskond")
    .useXpath()
    .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus")
    .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
    .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']")
    .useCss()
    .waitForElementVisible("body")
    .pause(3000)
    .assert.containsText("body", "Ametlikud Teadaanded (AT)")
    .pause(3000)
    .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus-AT.png`)
    .end();

    },

};
