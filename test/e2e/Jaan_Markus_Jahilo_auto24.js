const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['auto24'],
  'Open auto24': function (browser) {
    //Sisestab info
    browser
      .url('http://www.auto24.ee/main/mainindex.php')
      .pause(100)
      .waitForElementVisible('body')
      .pause(100)
      .click('#searchParam-cmm-1-make')
      .pause(100)
      .setValue('#searchParam-cmm-1-make', "Audi")
      .click('#searchParam-cmm-1-model_id')
      .pause(100)
      .setValue('#searchParam-cmm-1-model_id', "A4")
      .setValue('input[name="f1"]', "2004")
      .pause(100)
      .saveScreenshot(`${config.imgpath(browser)}Auto24(before submit).png`)
      .click('div[class="form-item item-submit"]')
      .pause(1000);
    //Valib auto, TBA
    browser

  }

};