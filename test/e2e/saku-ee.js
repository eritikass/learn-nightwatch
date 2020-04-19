const conf = require('../../nightwatch.conf.js');

module.exports = {
  "Saku Õlletehase uudised": function (browser) {
    browser
      .url("https://saku.ee/et/")
      .waitForElementVisible("body", 4000)
      .resizeWindow(1400, 1000)
      .click('button.pwag-yes-no__option--yes')
      .pause(2000)
      .click('#id_uudised')
      .useXpath()
      .saveScreenshot(`${conf.imgpath(browser)}saku-ee-uudised.png`)
      .end();
  },
};
